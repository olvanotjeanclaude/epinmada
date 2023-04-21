<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                "name" => "Elite Pass Plus Paketi (M21)",
                "price" => rand(200, 500),
                "image_url" => "assets/images/products/01.png",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "Royal Pass Paketi (M21)",
                "price" => rand(200, 500),
                "image_url" => "assets/images/products/02.png",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 63 UC",
                "price" => rand(200, 500),
                "image_url" => "assets/images/products/03.png",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "Pubg Mobile 340 UC",
                "price" => rand(200, 500),
                "image_url" => "assets/images/products/04.png",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 690 UC",
                "price" => rand(200, 500),
                "image_url" => "assets/images/products/04.png",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 4000 UC",
                "price" => rand(200, 500),
                "image_url" => "assets/images/products/05.png",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "Netflix Paketi",
                "price" => rand(200, 500),
                "image_url" => "https://about.netflix.com/images/logo.png",
                "category_id" => 2,
                "user_id" => 1
            ],
            [
                "name" => "Spotify Paketi",
                "price" => rand(200, 500),
                "image_url" => "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green-768x231.png",
                "category_id" => 3,
                "user_id" => 1
            ],
        ];

        foreach ($products as $key => $product) {
            Product::create($product);
        }
    }
}
