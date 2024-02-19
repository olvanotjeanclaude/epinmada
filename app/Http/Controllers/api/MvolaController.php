<?php

namespace App\Http\Controllers\api;

use App\Api\Mvola;
use App\Models\Payment;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Events\MvolaPaymentDone;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Event;

class MvolaController extends Controller
{
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
            Event::dispatch(new MvolaPaymentDone(["payment" => "failed"]));
            return response()->json([
                "type" => "error",
                "message" => "Unexpected error occure. Please try again later."
            ]);
        }

        $transaction =  [
            "unique_id" => $data->serverCorrelationId ?? "",
            "status" => $data->transactionStatus ?? "",
            "reference" => $data->transactionReference ?? "",
            "payment_phone_number" => $data->debitParty[0]?->value ?? "",
            "user_id" =>1
        ];

        // Log::info($transaction);

        if (isset($data->transactionReference)) {
            $payment =   Payment::create(array_merge($transaction, ["transaction" => json_encode($data) ?? ""]));
         
            // Event::dispatch(new MvolaPaymentDone($payment));

            return $payment;
        }

        return response()->json([
            "type" => "error",
            "message" => "Payment failed"
        ]);
    }

    public function initiateTransaction(Request $request)
    {
        $request->validate([
            "amount" => "required|numeric",
            "subscriberPhone" => "required|numeric",
        ]);

        return $this->mvola->initiateTransaction($request->amount, $request->subscriberPhone);
    }

    public function getTransactionStatus($serverCorrelationId, Request $request)
    {
        return $this->mvola->getTransactionStatus($serverCorrelationId);
    }

    public function getTransactionDetail($transID, Request $request)
    {
        return $this->mvola->getTransactionDetail($transID);
    }

    public function transactions()
    {

        $transaction =  [
            "unique_id" => Str::uuid()->toString(),
            "status" => "completed",
            "reference" => (string) random_int(11111111, 99999999),
            "payment_phone_number" => "0343500003",
        ];

        Payment::create($transaction);
        // return Payment::all();
    }
}
