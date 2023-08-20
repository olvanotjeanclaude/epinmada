<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Basket extends Model
{
    use HasFactory;

    protected $fillable = [
        "anonymous_id",
        "product_id",
        "quantity"
    ];

    protected $appends = ["formatted_sub_amount"];

    public function product()
    {
        return $this->belongsTo(Product::class, "product_id")->orderByDesc("created_at");
    }

    public static function ByCustomer()
    {
        return self::with("product", "product.category")
            ->where("anonymous_id", $_COOKIE["anonymousID"] ?? null)
            ->orderByDesc("id");
    }

    // public static function ByCustomer()
    // {
    //     if (Auth::check()) {
    //         Basket::where("anonymous_id", $_COOKIE["anonymousID"] ?? null)
    //             ->update(["user_id" => Auth::id()]);

    //         setcookie("anonymousID", "", time() - 3600);

    //         return  self::with("product", "product.category")->where("user_id", Auth::id())
    //             ->orderByDesc("id");
    //     }

    //     return self::with("product", "product.category")
    //         ->where("anonymous_id", $_COOKIE["anonymousID"] ?? null)
    //         ->orderByDesc("id");;
    // }


    public function getSubAmountAttribute()
    {
        return $this->product->price * $this->quantity;
    }

    public function getFormattedSubAmountAttribute()
    {
        return  formatPrice($this->sub_amount);
    }
}
