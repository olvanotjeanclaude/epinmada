<?php

namespace App\Http\Controllers\api;

use App\Api\Mvola;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MvolaController extends Controller
{
    private Mvola $mvola;

    public function __construct()
    {
        $this->mvola =  new Mvola();;
    }

    public function callback()
    {
        Log::info(file_get_contents('php://input') ?? null);
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

    public function getTransactionDetail($transID,Request $request)
    {
        // $request->validate([
        //     "transID" => "required|numeric",
        // ]);

        return $this->mvola->getTransactionDetail($transID);
    }
}
