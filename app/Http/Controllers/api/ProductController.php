<?php

namespace App\Http\Controllers\api;

use App\Models\File;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;

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

        $image = File::where("user_id", auth()->id())
            ->where("model", "product")
            ->where("key", $_COOKIE["product"])
            ->orderByDesc("id")
            ->first();

        if (is_null($image)) {
            return response()->json([
                "code" => 400,
                'type' => "error",
                'message' => "veuillez fournir l'image du produit"
            ]);
        }

        $data["image_url"] = $image->path;
        $data["category_id"] = $request->category;
        $data["unique_id"] = generateNo();
        $data["slug"] = Str::slug($request->name);

        Product::updateOrCreate(["name" => $request->name], $data);

        $image->update(["status" => File::STATUS["done"]]);

        $this->deleteImage();

        return response()->json([
            "code" => 200,
            'type' => "success",
            "message" => "Produit enregistré avec succès"
        ]);
    }

    private function deleteImage()
    {
        $files = File::where("key", $_COOKIE["product"])
            ->where("status", File::STATUS["pending"])
            ->get()
            ->each(function ($file) {
                // deleteFile($file->path);
            });

        $deleted = File::where("key", $_COOKIE["product"])->delete();

        setcookie("product", "", time() - 3600);

        return $deleted;
    }
}
