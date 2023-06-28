<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $epin = Product::Epins()->first();
        return view("index", compact("categories", "epin"));
    }

    public function getProducts($slug)
    {
        $category = Category::has("products")->where("slug", $slug)->firstOrFail();
        $product = $category->products->first();

        switch ($category->name) {
            case 'EPIN':
                return redirect()->route("front.getEpin", $product->slug);
            case "NETFLIX":
                return view("netflix", compact("product"));
            case "SPOTIFY":
                return view("spotify", compact("product"));
        }

        abort(404);
    }

    public function getEpin($slug)
    {
        $category = Category::where("slug", "epin")->firstOrFail();
        $selectedEpin = Product::where("slug", $slug)->firstOrFail();

        $products = $category->products()->where("slug", "!=", $selectedEpin->name)->get();

        return view("epins", compact("category", "products", "selectedEpin"));
    }

    public function getContact()
    {
        return view("contact");
    }

    public function getAboutUs()
    {
        return view("about-us");
    }

    public function allServices()
    {
        $categories = Category::hasProducts();
        $tops = Product::tops();

        return view("products", compact("categories", "tops"));
    }
}
