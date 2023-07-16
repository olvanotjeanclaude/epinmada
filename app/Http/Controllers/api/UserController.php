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
}
