<?php

namespace App\Api\Service;

use App\Api\Mvola;
use Illuminate\Support\Str;


class MvolaTransaction
{
    const PENDING = "pending";
    const COMPLETED = "completed";
    const FAILED = "failed";

    private $transactionInfos = [];

    public function __construct(
        public $amount,
        private $subscriberPhone,
        private $description,
        private $merchantPhone,
        private $currency = "Ar",
    ) {
    }

    public function serialize()
    {
        $transactionID = Str::uuid()->toString();

        $this->transactionInfos = [
            "amount" => (string)$this->amount,
            "currency" => $this->currency,
            "descriptionText" => $this->description,
            "requestingOrganisationTransactionReference" => $transactionID,
            "requestDate" => now()->format("Y-m-d\TH:i:s\.000\Z"),
            "originalTransactionReference" => $transactionID,
            "debitParty" => [
                [
                    "key" => "msisdn",
                    "value" => env("APP_ENV") == "production" ? $this->subscriberPhone : "0343500002"
                ]
            ],
            "creditParty" => [
                [
                    "key" => "msisdn",
                    "value" => $this->merchantPhone
                ]
            ],
            "metadata" => [
                [
                    "key" => "partnerName",
                    "value" =>  Mvola::PARTNER_NAME
                ]
            ]
        ];

        return $this->transactionInfos;
    }

    public function addDetail($key, $value)
    {
        $this->transactionInfos[$key] = $value;
    }

    public function getDetail()
    {
        return $this->transactionInfos;
    }
}
