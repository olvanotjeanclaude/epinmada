<?php

namespace App\Http\Controllers\api;

use App\Api\Mvola;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\SaleRequest;
use App\Models\Basket;
use App\Models\Sale;
use App\Traits\Saleable;

class MvolaController extends Controller
{
    use Saleable;

    private Mvola $mvola;

    public function __construct()
    {
        $this->mvola =  new Mvola();;
    }

    public function callback()
    {
        $original = file_get_contents('php://input') ?? null;

        $data = json_decode($original);

        if (!$data && !is_object($data) && !$data->objectReference) return;

        $this->updateOrCreateSale($data);
    }

    public function initiateTransaction(SaleRequest $request)
    {
        $transaction = $this->mvola->initiateTransaction(
            Basket::SumSubAmount(),
            $request->payment_phone_number,
            auth()->user()->full_name . " " . env("APP_NAME")
        );

        if (isset($transaction["status"])) $this->saveSale("mvola", $transaction);

        return response()->json($transaction);
    }

    private function updateOrCreateSale(object $data)
    {
        $transaction =  [
            "status" => $data->transactionStatus ?? "failed",
            "reference" => $data->transactionReference ?? "",
            "payment_phone_number" => $data->debitParty[0]?->value ?? "",
            "transaction" => json_encode($data) ?? "",
        ];


        if (isset($data->objectReference)) {
            $transaction["object_reference"] = $data->objectReference;
        }

        $sale = Sale::where("api_unique_id", $data->serverCorrelationId)->first();

        if ($sale) {
            $sale->update($transaction);

            if ($data->transactionStatus == "completed") {
                $this->saveOrder($sale);
                $this->sendMail($sale);

                Log::info("user payment called: " . json_encode($data));

                return $sale;
            }
        }

        Log::info(json_encode($data));

        return Sale::create(array_merge([
            "amount" =>   $data->amount ?? 0,
            "api_unique_id" => $data->serverCorrelationId ?? 0,
            "payment_mode" => "mvola",
            "unique_id" => generateNo(),
            "customer_id" => auth()->id() ?? 0,
            "transaction" => $transaction ? json_encode($transaction) : null
        ], $transaction));
    }


    public function getTransactionDetail($serverCorrelationId)
    {
        $response = $this->mvola->getTransactionStatus($serverCorrelationId);

        if (isset($response["status"]) && $response["status"] != "pending" && $response["objectReference"]) {
            $transaction = $this->mvola->getTransactionDetail($response["objectReference"]);
            $transaction["serverCorrelationId"] = $serverCorrelationId;
            $transaction["objectReference"] = $response["objectReference"];

            $this->updateOrCreateSale((object)$transaction);

            return [
                "status" => $transaction["transactionStatus"],
                "serverCorrelationId" => $transaction["serverCorrelationId"]
            ];
        }

        return response()->json($response);
    }

    public function transactions()
    {
        return Sale::orderByDesc("id")->get();
    }

    public function transaction($order)
    {
        $transaction =[];

        $sale = Sale::where(function ($query) {
            $query->where("object_reference", request("order"))
                ->orWhere("reference", request("order"))
                ->orWhere("unique_id", request("order"));
        })->first();

        
        if ($sale) {
            $transaction =  $this->mvola->getTransactionDetail($sale->object_reference ?? "");
            $transaction["customer"] = $sale->customer;
            $transaction["amount"] = $sale->amount;
           
            switch ($sale->status) {
                case "pending":
                    return response()->json([
                        "type" => "info",
                        "message" => "En Attente De Paiement"
                    ]);
                case 'paid':
                    return $transaction;
                case 'completed':
                    return $transaction;
                case 'failed':
                    $transaction["creationDate"] = $sale->created_at;
                    $transaction= array_merge($transaction, (array)$sale->transaction??[]);

                    return $transaction;
            }
        }

        return response()->json([
            "type" => "Error",
            "message" => "Aucune donnée disponible"
        ]);
    }
}
