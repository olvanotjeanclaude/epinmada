<?php

namespace App\Traits;

use App\Helpers\ImageUpload;
use App\Helpers\Message;
use App\Http\Requests\SaleRequest;
use App\Mail\InvoiceOfProduct;
use App\Models\Basket;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Sale;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

trait Saleable
{
    public function store(SaleRequest $request)
    {
        $sale = $this->saveSale($request->paymentMethod, $request->pubg_id);

        if ($sale) {
            $this->saveOrder($sale);
            $this->sendMail($sale);
            return Message::success("Achat");
        }

        return Message::error("Erreur survenue", 400);
    }

    private function sendMail($sale)
    {
        try {
            $invoice = new InvoiceOfProduct($sale);
            Mail::to("olvanotjeanclaude@gmail.com")->send($invoice);
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
        }
    }

    private function saveSale($paymentMethod, $transaction = null, $user_id = 0)
    {
        return  Sale::create([
            "amount" =>  Basket::SumSubAmount() ?? $transaction["amount"] ?? 0,
            "status" => $transaction["status"] ?? "",
            "api_unique_id" => $transaction["serverCorrelationId"] ?? 0,
            "payment_mode" => $paymentMethod,
            "user_id" => $user_id,
            "pubg_id" => request("pubg_id") ?? null,
            "unique_id" => generateNo(),
            "customer_id" => auth()->id() ?? 0,
            "payment_phone_number" => request("payment_phone_number") ?? "",
            "transaction" => $transaction ? json_encode($transaction) : null
        ]);
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
