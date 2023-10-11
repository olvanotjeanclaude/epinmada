<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    public function index()
    {
        return $this->reloadingList();
        
        if (request()->ajax()) {
        }

        return redirect("/");
    }

    public function store(Request $request)
    {
        $data =  $request->validate(["product_id" => "required"]);

        $data = [
            "anonymous_id" => $_COOKIE["anonymousID"],
            "product_id" => $request->product_id,
        ];

        $basket =  Basket::has("product")
            ->where("anonymous_id", $_COOKIE["anonymousID"] ?? null)
            ->where("product_id", $request->product_id)
            ->first();

        if ($basket) {
            $basket->increment("quantity");
        } else {
            Basket::create($data);
        }

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
        $baskets = Basket::ByCustomer()->get();

        return [
            // "html" => view("ajax.shop-cart", compact("baskets"))->render(),
            "sum_sub_amount" => formatPrice($baskets->sum("sub_amount")),
            "count" => $baskets->count(),
            "baskets" => $baskets
        ];
    }

    public function cart()
    {
        $baskets = Basket::ByCustomer()->get();

        return view("cart", compact("baskets"));
    }

    public function emptyCart()
    {
        Basket::ByCustomer()->delete();

        return back();
    }

    public function updateQuantity($productID, Request $request)
    {
        $request->validate(["quantity" => "required|numeric|min:1"]);

        $basket =  Basket::has("product")
            ->where("anonymous_id", $_COOKIE["anonymousID"] ?? null)
            ->where("product_id", $productID)
            ->firstOrFail();

        $basket->update(["quantity" => $request->quantity]);

        return $this->reloadingList();
    }
}
