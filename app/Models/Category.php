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
            "image" => ""
        ],
        [
            "name" => "NETFLIX",
            "description" => "Regardez des films  en ligne directement sur votre PC, Mac, mobile, tablette et plus encore.",
            "image" => "",
        ],
        [
            "name" => "SPOTIFY",
            "description" => "Accès à des millions de chansons et autres contenus de créateurs du monde entier.",
            "image" => "",
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
