<?php

namespace App\Api\Service;

use App\Api\Mvola;

class MvolaAuth extends Auth
{
    public function __construct($consumerKey,$consumerSecret)
    {
        parent::__construct(Mvola::BaseUrl() . "/token");

        $this->setHeaders([
            "Authorization" => "Basic " . base64_encode("$consumerKey:$consumerSecret"),
            "Cache-Control" => "no-cache",
        ]);

        $this->generateToken([
            "grant_type" => "client_credentials",
            "scope" => "EXT_INT_MVOLA_SCOPE"
        ]);
    }
}
