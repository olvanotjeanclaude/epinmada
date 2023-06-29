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

    public function product()
    {
        return $this->belongsTo(Product::class, "product_id")->orderByDesc("created_at");
    }

    public static function ByCustomer()
    {
        return DB::table("baskets")
            ->select([
                "baskets.id as basket_id",
                'products.unique_id',
                'products.name',
                'products.price',
                'products.image_url',
                "categories.name as category",
                DB::raw('(products.price * SUM(baskets.quantity)) as sub_amount'),
                DB::raw('SUM(baskets.quantity) as quantity')
            ])
            ->join("products", "products.unique_id", "baskets.product_id")
            ->join("categories", "categories.id", "products.category_id")
            ->where("anonymous_id", $_COOKIE["anonymousID"]??null)
            ->groupBy("products.unique_id")
            ->get();
    }
}
