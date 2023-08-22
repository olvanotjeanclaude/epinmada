<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SaleResource;
use App\Models\Order;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index()
    {
        return SaleResource::collection(Sale::paginate(9));
    }

    public function show(Sale $sale){
        $order = Order::first();
      
        return new SaleResource($sale);
    }
}
