<?php

namespace App\Http\Controllers\api;

use App\Helpers\ImageUpload;
use App\Helpers\Message;
use App\Http\Controllers\Controller;
use App\Http\Requests\SaleRequest;
use App\Http\Resources\OrderResource;
use App\Http\Resources\SaleResource;
use App\Mail\InvoiceOfProduct;
use App\Models\Basket;
use App\Models\Order;
use App\Models\Sale;
use App\Traits\Saleable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SaleController extends Controller
{
    use Saleable;

    public function index()
    {
        $checkboxs = array_filter(request("checkboxs") ?? [], fn ($checkbox) => $checkbox == "true");

        $sales = Sale::whereHas("customer", function ($query) {
            $search = request("query");
            if ($search) {
                $query->where("name", "LIKE", "%$search%")
                    ->orWhere("surname", "LIKE", "%$search%")
                    ->orWhere("phone", "LIKE", "%$search%")
                    ->orWhere("email", "LIKE", "%$search%");
            }
        })->when(request("query"), function ($query) {
            $query->orWhere("unique_id", "LIKE", "%" . request("query") . "%");
        });

        if (count($checkboxs)) {
            $sales = $sales->whereIn("status", array_keys($checkboxs));
        }

        $sales = $sales->orderByRaw("CASE WHEN status = 'pending' THEN 1 ELSE 2 END, id DESC")
            ->paginate(9);

        return SaleResource::collection($sales);
    }

    public function myOrders()
    {
        $orders = Order::has("product")
            ->whereHas("sale", function ($query) {
                $query->where("customer_id", auth()->id());
            })
            ->orderBy("id", "desc")
            ->get();

        return OrderResource::collection($orders);
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
        $sale = $this->saveSale($request->paymentMethod,);

        if ($sale) {
            $this->saveOrder($sale);
            $this->sendMail($sale);
            return Message::success("Achat");
        }

        return Message::error("Erreur survenue", 400);
    }
}
