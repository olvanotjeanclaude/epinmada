<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return view("index", compact("categories"));
    }

    public function getProducts($slug)
    {
        $category = Category::has("products")->where("slug", $slug)->firstOrFail();

        switch ($slug) {
            case 'epin':
                $selectedProduct = $category->products->first();
                return redirect()->route("front.getEpin", $selectedProduct->slug);
            default:
                # code...
                break;
        }

        return view("show-product", compact("category"));
    }

    public function getEpin($slug)
    {
        $category = Category::where("slug", "epin")->firstOrFail();
        $selectedEpin = Product::where("slug", $slug)->firstOrFail();

        $products = $category->products()->where("slug", "!=", $selectedEpin->name)->get();

        return view("epins", compact("category", "products", "selectedEpin"));
    }
}
