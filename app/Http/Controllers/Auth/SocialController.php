<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class SocialController extends Controller
{
    public function authSocial($social, Request $request)
    {
        $request->validate([
            "name" => "required",
            "surname" => "required",
            "email" => "required",
            "google_id" => "required"
        ], [
            "email.unique" => "L'email a déja été pris en compte."
        ]);

        $checkUserEmail = User::where("email", $request->email)->first();

        if ($checkUserEmail && is_null($checkUserEmail->google_id)) {
            return response()->json(["error" => "L'email a déja été pris!"], 422);
        }

        $user = User::where("google_id", $request->google_id)->first();

        $data = [
            "email" => $request->email,
            "name" => $request->name,
            "surname" => $request->surname,
            "name" => $request->name,
            "google_id" => $request->google_id,
            "password" => Hash::make(Str::random(4)),
            "social_value" => json_encode($request->social_value),
            "image" => $request->image
        ];

        if ($user) {
            $user->update(["social_value" => $request->social_value]);
        } else {
            $user =  User::create($data);
        }

        $token = $user->createToken('spa')->plainTextToken;

        return response()->json([
            "isSuccess" => true,
            "message" => "Login successfully!",
            'token' => $token,
            "user" => $user,
            'token_type' => 'Bearer',
        ]);
    }
}
