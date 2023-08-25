<?php

namespace App\Http\Resources;

use App\Models\Order;
use Illuminate\Http\Resources\Json\JsonResource;

class SaleResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "unique_id" => (string) $this->unique_id,
            "payment_mode" => $this->payment_mode,
            "pubg_id" => $this->pubg_id,
            "invoice_image" => $this->invoice_image,
            "status" => $this->status,
            "statusText" => $this->statusText,
            "note" => $this->note,
            "created_at" => $this->created_at,
            "formatted_amount" => $this->formatted_amount,
            "user" => $this->user,
            "customer" => $this->customer,
            "orders" => OrderResource::collection($this->orders),
        ];
    }
}
