<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                "name" => "Elite Pass Plus Paketi (M21)",
                "price" => rand(200, 500),
                "image_url" => "https://assetsio.reedpopcdn.com/PUBG-mobile.jfif?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "Royal Pass Paketi (M21)",
                "price" => rand(200, 500),
                "image_url" => "https://www.pubgmobile.com/images/event/home/part6.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 63 UC",
                "price" => rand(200, 500),
                "image_url" => "https://www.pubgmobile.com/images/event/home/part4.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "Pubg Mobile 340 UC",
                "price" => rand(200, 500),
                "image_url" => "https://www.pubgmobile.com/images/event/home/part3.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 690 UC",
                "price" => rand(200, 500),
                "image_url" => "https://www.pubgmobile.com/images/event/home/part2.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 4000 UC",
                "price" => rand(200, 500),
                "image_url" => "https://www.pubgmobile.com/images/event/home/kv.jpg",
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
            $product["slug"] = Str::slug($product["name"]);
            
            Product::create($product);
        }
    }
}
