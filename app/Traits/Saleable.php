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

    private function saveSale($paymentMethod, Payment $payment)
    {
        $lastSale = Sale::orderByDesc("id")->first();
        $filename = $lastSale ? $lastSale->id + 1 : 1;

        $data =  [
            "payment_mode" => $paymentMethod,
            "unique_id" => generateNo(),
            "status" => $payment->status,
            "customer_id" => $payment->user_id,
            "user_id" => auth()?->id() ?? 0
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
