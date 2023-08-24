<?php

namespace App\Http\Controllers\api;

use App\Helpers\ImageUpload;
use App\Helpers\Message;
use App\Http\Controllers\Controller;
use App\Http\Requests\SaleRequest;
use App\Http\Resources\SaleResource;
use App\Models\Basket;
use App\Models\Order;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index()
    {
        return SaleResource::collection(Sale::orderBy("id", "desc")->paginate(9));
    }

    public function myOrders(){
        $orders = Sale::where("customer_id",auth()->id())
        ->orderBy("id","desc")
        ->get();

        return SaleResource::collection($orders);
    }

    public function show(Sale $sale)
    {
        return new SaleResource($sale);
    }

    public function updateStatus($saleID, Request $request)
    {
        $sale = Sale::findOrFail($saleID);
        $request->validate(["status" => "required"]);

        $status = key_exists($request->status, Sale::STATUS) ? $request->status : "pending";

        if ($status) {
            $sale->update(["status" => $status]);


            return Message::success("Status de vente");
        }

        return Message::error("Erreur inconnue", 400);
    }

    public function store(SaleRequest $request)
    {
        $sale = $this->saveSale($request);

        if ($sale) {
            $this->saveOrder($sale);

            return Message::success("Achat");
        }

        return Message::error("Erreur survenue", 400);
    }

    private function saveSale($request)
    {
        $lastSale = Sale::orderByDesc("id")->first();
        $filename = $lastSale ? $lastSale->id + 1 : 1;

        $data =  [
            "payment_mode" => $request->paymentMethod,
            "pubg_id" => strtoupper($request->pubg_id),
            "unique_id" => generateNo(),
            "invoice_image" => ImageUpload::upload("invoice_$filename", "invoices", $request->file("files")),
            "user_id" => 0,
            "customer_id" => auth()->id()
        ];

        return Sale::create($data);
    }

    private function saveOrder($sale)
    {
        $orders = Basket::ByCustomer()
            ->get()
            ->map(function ($basket) use ($sale) {
                $order = [
                    "product_unique_id" => $basket->product->unique_id,
                    "sale_unique_id" => $sale->unique_id,
                    "price" => $basket->product->price,
                    "quantity" => $basket->quantity
                ];

                $newOrder =  Order::create($order);

                return $newOrder->id;
            });

        Basket::ByCustomer()->delete();

        return $orders;
    }
}
