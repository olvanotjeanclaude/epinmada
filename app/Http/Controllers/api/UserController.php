<?php

namespace App\Http\Controllers\api;

use App\Helpers\Message;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderByDesc("id")->paginate(4);

        return response()->json($users);
    }

    public function store(UserRequest $request)
    {
        User::create($request->validated());

        return Message::success("Utilisateur");
    }

    public function show($userID)
    {
        return User::findOrFail($userID);
    }

    public function update($userID, UserRequest $request)
    {
        $user = User::findOrFail($userID);

        $data = $request->except(["password", "password_confirmation"]);

        $user->update($data);

        return Message::success("Utilisateur");
    }

    public function destroy($userID)
    {
        $user = User::findOrFail($userID);

        $user->delete();

        return Message::delete(("Utilisateur"));
    }
}
