<?php

namespace App\Api\Service;

use Illuminate\Support\Facades\Http;

class Auth
{
    private $token;
    private $url;
    private $headers = [];

    public function __construct($url)
    {
        $this->url = $url;
    }

    public function generateToken($body)
    {
        $response = Http::withHeaders($this->headers)
            ->asForm()
            ->post($this->url, $body);

        if ($response->ok()) {
            $this->token = $response->object();
        }

        if ($this->token) return $this->token;

        return  response()->json([
            "error" => "Error occurred with status code: " . $response->status(),
            "statusCode" => $response->status()
        ], $response->status());
    }

    public function getAccessToken()
    {
        if ($this->token) {
            return $this->token->access_token;
        }

        return null;
    }

    public function setHeaders(array $headers)
    {
        $this->headers = array_merge($this->headers, $headers);
    }

    function formatHeaders(array $headers): array
    {
        $formattedHeaders = [];
        foreach ($headers as $key => $value) {
            $formattedHeaders[] = "$key: $value";
        }
        return $formattedHeaders;
    }
}
