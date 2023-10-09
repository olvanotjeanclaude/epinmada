<?php

namespace App\Http\Controllers\api;

use App\Helpers\Message;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {

        $customers = User::customers()
            ->where(function ($query) {
                $query->where("name", "LIKE", "%" . request("query") . "%")
                    ->orWhere("surname", "LIKE", "%" . request("query") . "%")
                    ->orWhere("email", "LIKE", "%" . request("query") . "%")
                    ->orWhere("phone", "LIKE", "%" . request("query") . "%");
            })
            ->orderByDesc("id")
            ->paginate(12);

        return response()->json($customers);
    }

    public function show($id)
    {
        $customer = User::findOrFail($id);

        return response()->json($customer);
    }

    public function destroy($customerIDs)
    {
        $ids = explode(",", $customerIDs);

        $users = User::whereIn("id", $ids);

        if ($users->count()) {
            $users->delete();
            return Message::delete(("Client"));
        }

        return Message::alert("Client introuvable", "error", 400);
    }
}
