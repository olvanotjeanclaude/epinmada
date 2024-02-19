<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Basket extends Model
{
    use HasFactory;

    protected $fillable = [
        "anonymous_id",
        "product_id",
        "quantity",
        "user_id"
    ];

    protected $appends = ["formatted_sub_amount"];

    public function product()
    {
        return $this->belongsTo(Product::class, "product_id")->orderByDesc("created_at");
    }

    public static function ByCustomer()
    {
        if (Auth::check()) {
            return  self::has("product")
                ->with("product", "product.category")
                ->where("user_id", Auth::id())
                ->orderByDesc("id");
        }

        return self::has("product")
            ->with("product", "product.category")
            ->where("anonymous_id", session("anonymous_id"))
            ->whereNull("user_id")
            ->orderByDesc("id");
    }


    public function getSubAmountAttribute()
    {
        return $this->product->price * $this->quantity;
    }

    public function getFormattedSubAmountAttribute()
    {
        return  formatPrice($this->sub_amount);
    }

    public static function SumSubAmount()
    {
        return Basket::ByCustomer()->get()->sum("sub_amount");
    }
}
