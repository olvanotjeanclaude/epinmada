<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderByDesc("id")->paginate(8);

        if (request()->ajax()) {
        }
        return response()->json($users);

        return view("admin.user.index", compact("users"));
    }

    public function create()
    {
        return view("admin.user.create");
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "type" => "required",
            "name" => "required",
            "surname" => "required",
            "phone" => "required",
            "email" => "required|unique:users",
            "password" => "required|confirmed",
            "password_confirmation" => "required",
        ]);

        User::create($data);

        return redirect()->route("admin.utilisateurs.index")->with("success", "Utilisateur enregistré avec succès");
    }
}
