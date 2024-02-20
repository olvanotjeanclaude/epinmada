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
        $data = file_get_contents('php://input') ?? null;

        $data = json_decode($data);

        if (!$data && !is_object($data)) {
            return response()->json([
                "type" => "error",
                "message" => "Unexpected error occure. Please try again later."
            ]);
        }

        $transaction =  [
            "status" => $data->transactionStatus ?? "",
            "reference" => $data->transactionReference ?? "",
            "payment_phone_number" => $data->debitParty[0]?->value ?? "",
        ];

        Log::info($transaction);

        if (isset($data->transactionReference)) {
            $payment = Payment::where("unique_id", $data->serverCorrelationId)->firstOrFail();

            $payment->update(array_merge($transaction, ["transaction" => json_encode($data) ?? ""]));

            $sale = $this->saveSale("mvola",$payment);

            $this->saveOrder($sale);

            $this->sendMail($sale);

            return $payment;
        }

        return response()->json([
            "type" => "error",
            "message" => "Payment failed"
        ]);
    }

    public function initiateTransaction(SaleRequest $request)
    {
        $request->validate(["payment_phone_number" => "required|numeric"]);

        $res = $this->mvola->initiateTransaction(
            Basket::SumSubAmount(),
            $request->payment_phone_number,
            auth()->user()->full_name . " " . env("APP_NAME")
        );

        if (isset($res["status"])) {
            Payment::create([
                "payment_phone_number" => $request->payment_phone_number,
                "paymentMethod" => $request->paymentMethod,
                "status" => $res["status"],
                "unique_id" => $res["serverCorrelationId"],
                "user_id" => auth()->id()
            ]);
        }

        return response()->json($res);
    }



    public function getTransactionDetail($transID, Request $request)
    {
        return Payment::where("unique_id", $transID)->first();
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
