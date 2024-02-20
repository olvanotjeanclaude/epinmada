<?php

namespace App\Api\Service;

interface IPayment
{
    public function generateToken();

    public function initiateTransaction($amount, $subscriberPhone, $description);
}
