<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "user_id"
    ];

    const DEFAULTS = [
        "1" =>  ["name" => "EPIN", "user_id" => 1],
        "2" => ["name" => "NETFLIX", "user_id" => 1],
        "3" => ["name" => "SPOTIFY", "user_id" => 1],
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
