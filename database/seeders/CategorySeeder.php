<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    public function run()
    {
        foreach (Category::DEFAULTS as $key => $category) {
            $category["user_id"] =1;
            $category["slug"] = Str::slug($category["name"]);

            Category::create($category);
        }
    }
}
