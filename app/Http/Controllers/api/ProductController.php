<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with("category")
            ->whereHas("category", function ($query) {
                $inputs = array_filter(request()->all(), fn ($input) => $input == "true");
                $names = array_keys($inputs);
                Log::info($names);

                if(count($names)){
                    $query->whereIn("name",$names);
                }
            })->paginate(5);

        $datas = [
            "products" => $products,
            "categories" => Category::all()
        ];

        return response()->json($datas);
    }

    public function show($id)
    {
        return Product::findOrFail($id);
    }
}
