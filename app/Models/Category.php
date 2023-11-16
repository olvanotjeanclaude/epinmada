<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "slug",
        "user_id"
    ];

    const DEFAULTS = [
        [
            "name" => "EPIN",
            "description" => "Achetez toujours les produits des jeux les plus populaires de tous les temps au meilleur prix !",
            "image" => "https://www.pubgmobile.com/images/event/home/part6.jpg"
        ],
        [
            "name" => "NETFLIX",
            "description" => "Regardez des films  en ligne directement sur votre PC, Mac, mobile, tablette et plus encore.",
            "image" => "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",
        ],
        [
            "name" => "SPOTIFY",
            "description" => "Accès à des millions de chansons et autres contenus de créateurs du monde entier.",
            "image" => "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png",
        ],
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function scopeHasProducts($query)
    {
        return $query->has("products")->get();
    }
}
