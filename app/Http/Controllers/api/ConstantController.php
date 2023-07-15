<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ConstantController extends Controller
{
    public function constants()
    {
        $constants = [
            "user_types" => User::TYPES
        ];

        return response()->json($constants);
    }
}
