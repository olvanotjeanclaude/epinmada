<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BasketController extends Controller
{
    public function index()
    {
        if (request()->ajax()) {
            return $this->reloadingList();
        }

        return redirect("/");
    }

    public function store(Request $request)
    {
        Product::findOrFail($request->product_id);

        $data =  $request->validate([
            "anonymous_id" => "required",
            "product_id" => "required",
            "quantity" => "required"
        ]);

        Basket::create($data);

        return $this->reloadingList();
    }

    public function destroy($product_unique_id)
    {
        Basket::where("anonymous_id", $_COOKIE['anonymousID'] ?? null)
            ->where("product_id", $product_unique_id)
            ->delete();

        return $this->reloadingList();
    }

    private function reloadingList()
    {
        $baskets = Basket::ByCustomer();

        return [
            "html" => view("ajax.shop-cart", compact("baskets"))->render(),
            "count" => $baskets->count(),
            "baskets" =>$baskets
        ];
    }
}
