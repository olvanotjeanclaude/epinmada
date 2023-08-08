<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {

        $customers = User::customers()
        ->where(function($query){
            $query->where("name","LIKE","%".request("query")."%")
            ->orWhere("surname","LIKE","%".request("query")."%")
            ->orWhere("email","LIKE","%".request("query")."%")
            ->orWhere("phone","LIKE","%".request("query")."%");
        })
        ->paginate(8);

        return response()->json($customers);
    }
}
