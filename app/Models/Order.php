<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ["product_unique_id", "price", "quantity", "sale_unique_id", "note"];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    public function getFormattedSubAmountAttribute()
    {
        return  formatPrice($this->sub_amount);
    }

    public function getSubAmountAttribute()
    {
        return $this->price * $this->quantity;
    }
}
