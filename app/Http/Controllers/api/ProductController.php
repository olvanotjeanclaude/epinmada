<?php

namespace App\Http\Controllers\api;

use App\Helpers\ImageUpload;
use App\Helpers\Message;
use App\Models\File;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    public function index()
    {
        $search = request("query");
        $products = Product::with("category")
            ->whereHas("category", function ($query) {
                $inputs = array_filter(request("checkboxs") ?? [], fn ($input) => $input == "true");
                $catIds = array_keys($inputs);

                if (count($catIds)) {
                    $query->whereIn("id", $catIds);
                }

                $tag = request("tag");

                if ($tag && $tag != "all") {
                    $query->where("name", "LIKE", "%$tag%");
                }
            })
            ->where("name", "LIKE", "%$search%")
            ->orderByDesc("id")
            ->paginate(request("tag") == "all" ? Product::count() : 6);

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
       
        // dd($data);
        $data["category_id"] = $request->category;
        $data["image_url"] = ImageUpload::upload(Str::slug($request->name),"product",$request->file("file"));
        $data["category_id"] = $request->category;
        $data["unique_id"] = generateNo();
        $data["slug"] = Str::slug($request->name);

        Product::updateOrCreate(["name" => $request->name], $data);

        return Message::success("Produit");
    }

    public function update($productID, ProductRequest $request)
    {
        $product = Product::whereId($productID)->firstOrFail();

        $data = $request->validated();

        $data["category_id"] = $request->category;
        $data["slug"] = Str::slug($request->name);

        $product->update($data);

        return Message::success("Produit");
    }

    public function destroy($unique_id)
    {
        $product = Product::findOrFail($unique_id);

        deleteFile($product->image_url);

        $product->delete();

        return Message::delete(("Produit"));
    }
}
