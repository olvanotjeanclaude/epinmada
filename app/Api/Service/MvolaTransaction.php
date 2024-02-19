<?php

namespace App\Api\Service;

use App\Api\Mvola;
use Illuminate\Support\Str;


class MvolaTransaction
{
    CONST PENDING = "pending";
    CONST COMPLETED = "completed";
    CONST FAILED = "failed";

    private $transactionInfos = [];

    public function __construct(
        public $amount,
        private $subscriberPhone,
        private $merchantPhone,
        private $descriptionText = "Test Mvola ity ein",
        private $currency = "Ar",
    ) {
    }

    public function serialize()
    {
        $transactionID = Str::uuid()->toString();

        $this->transactionInfos = [
            "amount" => (string)$this->amount,
            "currency" => $this->currency,
            "descriptionText" => $this->descriptionText,
            "requestingOrganisationTransactionReference" => $transactionID,
            "requestDate" => now()->format("Y-m-d\TH:i:s\.000\Z"),
            "originalTransactionReference" => $transactionID,
            "debitParty" => [
                [
                    "key" => "msisdn",
                    "value" => $this->subscriberPhone
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
