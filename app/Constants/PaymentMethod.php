<?php

namespace App\Constants;

class PaymentMethod
{
    const MOBILE = [
        "orangeMoney" => [
            "name" => "Orange Money",
            "image" => "",
            "key" => "orangeMoney",
            "number" => "032 00 000 00"
        ],
        "airtlelMoney" => [
            "name" => "Airtel Money",
            "image" => "",
            "key" => "airtlelMoney",
            "number" => "033 00 000 00"
        ],
        "mvola" => [
            "name" => "Mvola",
            "image" => "",
            "key" => "mvola",
            "number" => "034 35 000 04"
        ],
    ];

    public static function all()
    {
        return [
            "mobile" => array_values(self::MOBILE),
        ];
    }
}
