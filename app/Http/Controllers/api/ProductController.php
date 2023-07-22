<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
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

                if (count($names)) {
                    $query->whereIn("name", $names);
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

    public function store(ProductRequest $request)
    {
        $data = $request->validated();
        $data["category_id"] = $request->category;

        Product::create($data);

        return response()->json([
            "type" => "success",
            "value" => "Produit enregistré avec succès"
        ]);
    }
}
