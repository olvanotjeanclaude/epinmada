<?php

namespace App\Models;

use App\Events\MvolaPaymentDone;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Event;

class Payment extends Model
{
    use HasFactory;

    const STATUS = [
        "pending" => "pending",
        "completed" => "completed",
        "failed" => "failed",
    ];

    protected $fillable = [
        "unique_id",
        "status",
        "transaction",
        "payment_phone_number",
        "reference",
        "pubg_id",
        "user_id"
    ];


    // protected static function booted(): void
    // {
    //     static::created(function (Payment $payment) {
    //         $transaction =  [
    //             "unique_id" => $payment->serverCorrelationId ?? "",
    //             "status" => $payment->transactionStatus ?? "",
    //             "reference" => $payment->transactionReference ?? "",
    //             "payment_phone_number" => $payment->debitParty[0]?->value ?? "",
    //         ];

    //         Event::dispatch(new MvolaPaymentDone($transaction));
    //     });
    // }
}
