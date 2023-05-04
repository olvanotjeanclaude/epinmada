<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function showLoginForm(){
        return response()->json("Login Form");
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ],[
            "email.required" =>"Le champ email est obligatoire.",
            "email.email" =>"L'e-mail doit être une adresse e-mail valide.",
            "password.required" =>"Le champ mot de passe est obligatoire."
        ]);

        if (Auth::attempt($credentials)) {
            $user = $request->user();
            $token = $user->createToken('spa')->plainTextToken;

            return response()->json([
                'token' => $token,
                "user" => $user,
                'token_type' => 'Bearer',
            ]);
        }

        return response()->json(['message' => "les informations d'identification invalides"], 422);
    }
}
