<?php

namespace App\Http\Controllers\api;

use App\Api\Mvola;
use App\Models\Payment;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Events\MvolaPaymentDone;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\SaleRequest;
use App\Models\Basket;
use App\Models\Sale;
use App\Traits\Saleable;
use Illuminate\Support\Facades\Event;

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

        if (!$data && !is_object($data)) {
            return response()->json([
                "type" => "error",
                "message" => "Unexpected error occure. Please try again later."
            ]);
        }

        $transaction =  [
            "status" => $data->transactionStatus,
            "reference" => $data->transactionReference ?? "",
            "payment_phone_number" => $data->debitParty[0]?->value ?? "",
            "transaction" => json_encode($data) ?? "",
            "amount" =>$data->amount??0
        ];

        Log::info($transaction);

        $sale = Sale::where("api_unique_id", $data->serverCorrelationId)->firstOrFail();
       
        $sale->update($transaction);

        if ($data->transactionStatus == "completed") {
            Log::info("Payment success");
           
            $this->saveOrder($sale);
            $this->sendMail($sale);
            return $sale;
        }

        $sale->update(["status" => "failed"]);
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


    public function getTransactionDetail($transID, Request $request)
    {
        $response = $this->mvola->getTransactionStatus($transID);
        return [
            "status" => $response["status"]??null
        ];
    }

    public function transactions()
    {
        $transaction =  [
            "unique_id" => Str::uuid()->toString(),
            "status" => "completed",
            "reference" => (string) random_int(11111111, 99999999),
            "payment_phone_number" => "0343500003",
        ];

        return Payment::all();
    }
}
