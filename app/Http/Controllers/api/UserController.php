<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderByDesc("id")->paginate(8);

        return response()->json($users);
    }

    public function store(UserRequest $request)
    {
        User::create($request->validated());

        return response()->json([
            "type" => "success",
            "value" => "Utilisateur enregistré avec succès"
        ]);
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

        return response()->json([
            "type" => "success",
            "value" => "Utilisateur a été sauvegardé avec succès"
        ]);
    }

    public function destroy($userID){
        $user = User::findOrFail($userID);

        $user->delete();

        return response()->json([
            "type" => "success",
            "value" => "Utilisateur a été supprimé avec succès"
        ]);
    }
}
