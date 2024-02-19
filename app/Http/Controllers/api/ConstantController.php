<?php

namespace App\Http\Controllers\api;

use App\Constants\PaymentMethod;
use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Models\User;
use Illuminate\Http\Request;

class ConstantController extends Controller
{
    public function constants()
    {
        $constants = [
            "user_types" => User::TYPES,
            "payementMethods" =>PaymentMethod::all(),
            "saleTypes" => Sale::STATUS,
            "comechantPhone" => env("MVOLA_COMERCHANT_PHONE")
        ];

        return response()->json($constants);
    }
}
