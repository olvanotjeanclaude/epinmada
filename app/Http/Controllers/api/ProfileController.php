<?php

namespace App\Http\Controllers\api;

use App\Helpers\Message;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProfileRequest;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function updateProfile(UpdateProfileRequest $request)
    {
        $request->user()->update($request->validated());

        return Message::success("Profile");
    }
}
