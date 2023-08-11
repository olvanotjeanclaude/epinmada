<?php

namespace App\Http\Controllers\api;

use App\Helpers\Message;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index()
    {
        $checkboxs = array_filter(request("checkboxs")??[], fn ($checkbox) => $checkbox == "true");

        $users = User::where("type", "!=", User::TYPES["client"])
            ->where(function ($query) {
                $search = request("query");
                $query->where("name", "LIKE", "%$search%")
                    ->orWhere("surname", "LIKE", "%$search%")
                    ->orWhere("phone", "LIKE", "%$search%")
                    ->orWhere("email", "LIKE", "%$search%");
            });

        if (count($checkboxs)) {
            $users = $users->whereIn("type", array_keys($checkboxs));
        }

        $users = $users->orderByDesc("id")->paginate(6);

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
