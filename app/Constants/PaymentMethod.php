<?php

namespace App\Constants;

class PaymentMethod{
     const MOBILE = [
        "mvola" => [
            "name" =>"Mvola",
            "image" =>"",
            "key" =>"mvola"
        ],
        "orangeMoney" =>[
            "name" =>"Orange Money",
            "key" =>"orangeMoney",
            "image" =>""
        ],
        "airtlelMoney" =>[
            "name" =>"Airtel Money",
            "key" =>"airtlelMoney",
            "image" =>""
        ],
     ];

     public static function all(){
        return [
            "mobile" =>array_values(self::MOBILE),
            "api" =>"ok ok"
        ];
     }
}