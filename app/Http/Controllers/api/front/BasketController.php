<?php

namespace App\Http\Controllers\api\front;

use App\Models\Basket;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class BasketController extends Controller
{
    private function generateAnonymousID()
    {
        if (!session("anonymous_id")) {
            $anonymous_id = Str::uuid()->toString();

            Session::put("anonymous_id", $anonymous_id);
        }
    }

    private function updateUserID()
    {
        if (Auth::check()) {
            Basket::whereNull("user_id")
                ->where("anonymous_id", session("anonymous_id"))
                ->update(["user_id" => Auth::id()]);
        }
    }

    public function index()
    {
        return $this->reloadingList();
    }

    public function store(Request $request)
    {
        $this->generateAnonymousID();

        $data =  $request->validate(["product_id" => "required"]);

        $this->updateUserID();

        $data = [
            "anonymous_id" => session("anonymous_id"),
            "product_id" => $request->product_id,
            "user_id" => Auth::id()
        ];

        $basket = Basket::has("product")
            ->where(function ($query) {
                $query->where("anonymous_id", session("anonymous_id"))
                    ->orWhere("user_id", Auth::id());
            })
            ->where("product_id", $request->product_id)
            ->first();

        if ($basket) {
            $basket->update(["user_id" => Auth::id()]);
            $basket->increment("quantity");
        } else {
            Basket::create($data);
        }

        return $this->reloadingList();
    }

    public function destroy($basketID)
    {
        $basket = Basket::findOrFail($basketID);

        $basket->delete();

        return $this->reloadingList();
    }

    private function reloadingList()
    {
        $this->updateUserID();
        
        $baskets = Basket::ByCustomer()->get();

        return [
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
        Basket::where("anonymous_id", session("anonymous_id"))
            ->orWhere("user_id", Auth::id())->delete();

        return back();
    }

    public function updateQuantity(Basket $basket, Request $request)
    {
        $request->validate(["quantity" => "required|numeric|min:1"]);

        $basket->update(["quantity" => $request->quantity]);

        return $this->reloadingList();
    }
}
