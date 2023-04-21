<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $datas = [
            "products" => Product::with("category")->get(),
            "categories" =>Category::all()
        ];

        return response()->json($datas);
    }
}
