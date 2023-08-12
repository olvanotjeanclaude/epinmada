<?php

namespace App\Http\Controllers\api;

use App\Constants\PaymentMethod;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ConstantController extends Controller
{
    public function constants()
    {
        $constants = [
            "user_types" => User::TYPES,
            "payementMethods" =>PaymentMethod::all()
        ];

        return response()->json($constants);
    }
}
