<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "product" => $this->product,
            "quantity" =>$this->quantity,
            "price" =>$this->price,
            "formattedSubAmount" =>$this->formatted_sub_amount,
            "note" => $this->note,
            "created_at" => $this->created_at,
            "sale" =>$this->sale
        ];
    }
}
