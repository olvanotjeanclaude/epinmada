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
                "price" => rand(10000, 15000),
                "image_url" => "https://assetsio.reedpopcdn.com/PUBG-mobile.jfif?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "Royal Pass Paketi (M21)",
                "price" => rand(10000, 15000),
                "image_url" => "https://www.pubgmobile.com/images/event/home/part6.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 63 UC",
                "price" => rand(10000, 15000),
                "image_url" => "https://www.pubgmobile.com/images/event/home/part4.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "Pubg Mobile 340 UC",
                "price" => rand(10000, 15000),
                "image_url" => "https://www.pubgmobile.com/images/event/home/part3.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 690 UC",
                "price" => rand(10000, 15000),
                "image_url" => "https://www.pubgmobile.com/images/event/home/part2.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PUBG Mobile 4000 UC",
                "price" => rand(10000, 15000),
                "image_url" => "https://www.pubgmobile.com/images/event/home/kv.jpg",
                "category_id" => 1,
                "user_id" => 1
            ],
            [
                "name" => "PAQUET NETFLIX",
                "price" => rand(10000, 15000),
                "image_url" =>  "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",
                "short_description" => "<p>Le streaming ultime avec Netflix ! Films primés, séries captivantes, 
                                            documentaires fascinants et originaux exclusifs. Accès instantané sur tous vos appareils. 
                                            Rejoignez-nous maintenant et plongez dans l'expérience Netflix.
                                        <p>
                                        <p>Films, émissions de télévision et plus encore illimités</p>",
                "category_id" => 2,
                "user_id" => 1
            ],
            [
                "name" => "PAQUET SPOTIFY",
                "price" => rand(10000, 15000),
                "image_url" => "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png",
                "short_description" =>"<p>Découvrez la bande son de votre vie avec Spotify, la plateforme de streaming musical ultime. 
                                       Plongez-vous dans un univers infini de musique, des derniers succès aux classiques intemporels. 
                                       Créez vos propres playlists personnalisées pour chaque occasion, que ce soit pour vous détendre, 
                                       vous motiver ou vous échapper du quotidien.</p>
                                       
                                       <p>Avec Spotify, explorez de nouveaux genres, suivez vos artistes préférés et découvrez des 
                                       recommandations sur mesure rien que pour vous.
                                       </p>",
                "category_id" => 3,
                "user_id" => 1
            ],
        ];

        foreach ($products as $key => $product) {
            $product["slug"] = Str::slug($product["name"]);
            $product["unique_id"] = generateNo();
            Product::create($product);
        }
    }
}
