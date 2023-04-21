<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "status",
        "name",
        "price",
        "image_url",
        "category_id",
        "user_id"
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, "category_id");
    }

    public function getPriceAttribute($value){
        return floatval($value);
    }

    public function getImageUrlAttribute($value){
        return getImage($value);
    }
}
