<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $epin = Product::Epins()->first();
        $teams = User::where("is_team",true)->get();
        return view("index", compact("categories", "epin","teams"));
    }

    public function getProducts($slug)
    {
        $category = Category::has("products")->where("slug", $slug)->firstOrFail();
        $selected = $category->products->first();
        $products = $category->products()->where("id","!=",$selected?->id)->get();
        return view("getProducts",compact("category","products","selected"));
    }

    public function getProduct($category,$slug)
    {
        $category = Category::has("products")->where("slug", $category)->firstOrFail();
        $selected = Product::where("slug",$slug)->firstOrFail();
        $products = $category->products()->where("id","!=",$selected->id)->get();
        return view("getProducts",compact("category","products","selected"));
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
