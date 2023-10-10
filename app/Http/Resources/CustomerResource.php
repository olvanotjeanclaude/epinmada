<?php

namespace App\Http\Resources;

use App\Models\Order;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
 
    public function toArray($request)
    {
        $orders = Order::has("product")->whereHas("sale",function($query){
            $query->where("customer_id",$this->id);
        })
        ->orderBy("id","desc")
        ->get();


        return [
            'id' => $this->id,
            'name' => $this->name,
            'surname' => $this->surname,
            'email' => $this->email,
            'phone' => $this->phone,
            'created_at' => $this->created_at,
            "orders" => OrderResource::collection($orders)
        ];
    }
}
