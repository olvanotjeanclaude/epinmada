<?php

namespace App\Http\Controllers\api;

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
        $data["category_id"] = $request->category;

        $image = File::where("user_id", auth()->id())
            ->where("model", "product")
            ->where("key", $request->imageKey)
            ->orderByDesc("id")
            ->first();

        if (is_null($image)) {
            return Message::error("veuillez fournir l'image du produit", 400);
        }

        $data["image_url"] = $image->path ?? "";
        $data["category_id"] = $request->category;
        $data["unique_id"] = generateNo();
        $data["slug"] = Str::slug($request->name);

        Product::updateOrCreate(["name" => $request->name], $data);

        $image->update(["status" => File::STATUS["done"]]);

        $this->deleteImage();

        return Message::success("Produit");
    }

    public function update($productID, ProductRequest $request)
    {
        $product = Product::whereId($productID)->firstOrFail();

        $data = $request->validated();

        $data["category_id"] = $request->category;

        $image = File::where("user_id", auth()->id())
            ->where("model", "product")
            ->where("key", $request->imageKey)
            ->orderByDesc("id")
            ->first();

        if ($image) {
            $data["image_url"] = $image->path ?? "";
        }

        $data["category_id"] = $request->category;
        $data["slug"] = Str::slug($request->name);

        $product->update($data);

        $image?->update(["status" => File::STATUS["done"]]);

        $this->deleteImage();

        return Message::success("Produit");
    }

    private function deleteImage()
    {
        $deleted = File::where("key", request("imageKey"))->delete();

        setcookie("product", "", time() - 3600);

        return $deleted;
    }

    public function destroy($unique_id)
    {
        $product = Product::findOrFail($unique_id);

        deleteFile($product->image_url);

        $product->delete();

        return Message::delete(("Produit"));
    }
}
