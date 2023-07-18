<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $datas = [
            "products" => Product::with("category")->paginate(5),
            "categories" => Category::all()
        ];

        return response()->json($datas);
    }

    public function show($id){
        return Product::findOrFail($id);
    }
}
