<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $primaryKey = "unique_id";

    protected $fillable = [
        "status",
        "unique_id",
        "name",
        "slug",
        "price",
        "image_url",
        "category_id",
        "short_description",
        "long_description",
        "user_id"
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getPriceAttribute($value)
    {
        return floatval($value);
    }

    public function getFormattedPriceAttribute()
    {
        return formatPrice($this->price);
    }

    public function getImageUrlAttribute($value)
    {
        return getImage($value);
    }

    public function scopeActive($query)
    {
        return $query->where("status", true);
    }

    public function scopeEpins($query)
    {
        return $query->active()->whereHas("category", fn ($query) => $query->where("name", "EPIN"));
    }

    public function getRouteDetailAttribute()
    {
        if ($this->category?->name == "EPIN") {
            return route("front.getEpin", $this->slug);
        }

        return route("front.getProducts", $this->category?->slug);
    }

    public static function Tops()
    {
        $epins = self::epins()->inRandomOrder()->limit(2)->get();
        $other = self::active()
            ->whereHas("category", fn ($query) => $query->where("name", "!=", "EPIN"))
            ->limit(2)->get();
      
        return $epins->merge($other);
    }
}
