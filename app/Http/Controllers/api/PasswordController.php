<?php

namespace App\Http\Controllers\api;

use App\Helpers\Message;
use App\Http\Controllers\Controller;
use App\Http\Requests\PasswordRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    public function updatePassword(PasswordRequest $request)
    {
        $user = $request->user();

        $user->update(["password" => Hash::make($request->password)]);

        return Message::success("Mot de passe");
    }
}
