<?php

namespace App\Api;

use Illuminate\Support\Str;
use App\Api\Service\IPayment;
use App\Api\Service\MvolaAuth;
use Illuminate\Support\Facades\Http;
use App\Api\Service\MvolaTransaction;
use Illuminate\Support\Facades\Log;

class Mvola implements IPayment
{
    const SANDBOX_URL = "https://devapi.mvola.mg";
    const PRODUCTION_URL = "https://api.mvola.mg";
    const BASE_PATH = "/mvola/mm/transactions/type/merchantpay/1.0.0";
    const PARTNER_NAME = "TestMvola";

    private $merchantPhone = "0343500004";

    private  $baseUrl = null;
    private $token;

    private $headers = [
        'Accept' => '*/*',
        'Version' => '1.0',
        'UserLanguage' => 'FR',
        'Content-Type' => 'application/json',
        'Cache-Control' => 'no-cache',
    ];

    public function __construct()
    {
        $this->baseUrl = self::BaseUrl();

        $this->generateToken();

        $this->setHeaders([
            'Content-Type' => 'application/json',
            "Authorization" => "Bearer {$this->token}",
            "X-CorrelationID" => Str::uuid()->toString(),
            "partnerName" => self::PARTNER_NAME,
            "UserAccountIdentifier" => "msisdn;{$this->merchantPhone}",
            'X-Callback-URL' =>  "http://epin.suarego.com/api/mvola/callback"
        ]);
    }

    public static function BaseUrl()
    {
        if (env("APP_ENV") == "production") {
            return self::PRODUCTION_URL;
        }

        return  self::SANDBOX_URL;
    }

    public function setHeaders(array $options)
    {
        $this->headers = array_merge($this->headers, $options);
    }

    public function generateToken()
    {
        $mvolaAuth = new MvolaAuth(env("MVOLA_CONSUMER_KEY"), env("MVOLA_CONSUMER_SECRET"));

        $this->token = $mvolaAuth->getAccessToken();

        return $this->token;
    }

    public function initiateTransaction($amount, $subscriberPhone, $description)
    {
        $transactionUrl = $this->baseUrl . self::BASE_PATH;
        $transPayload = new MvolaTransaction($amount,  $subscriberPhone, $description, $this->merchantPhone);

        $response = Http::withHeaders($this->headers)->post($transactionUrl, $transPayload->serialize());

        if ($response->successful()) {
            return $response->json();
        }

        return [
            "status" => "failed",
            "type" => "error",
            "message" => "Payment failed. please verify your balance!"
        ];
    }

    public function getTransactionStatus($serverCorrelationId)
    {
        $statusurl =  $this->baseUrl . self::BASE_PATH . "/status/$serverCorrelationId";

        $response = Http::withHeaders($this->headers)
            ->get($statusurl, ["serverCorrelationId" => $serverCorrelationId]);


        if (!$response->ok()) {
            Log::error(["error_status" => $response->json()]);
        }

        return $response->json();
    }

    public function getTransactionDetail(string $transID)
    {
        $detailUrl = $this->baseUrl . self::BASE_PATH . "/$transID";

        $response = Http::withHeaders($this->headers)
            ->get($detailUrl, ["transID" => $transID])
            ->json();

        return $response;
    }
}
