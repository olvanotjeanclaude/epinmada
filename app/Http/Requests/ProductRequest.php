<?php

namespace App\Http\Requests;

use App\Traits\Error;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Route;

class ProductRequest extends FormRequest
{

    use Error;

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            "name" => "required",
            "price" => "required",
            "category" => "required",
            "short_description" => "required",
            "long_description" => "",
            "file" => Route::currentRouteName() == "products.update" ? "" : "required|image"
        ];
    }

    public function messages()
    {
        return [
            "file.required" => "Veuillez entrer le photo du produit"
        ];
    }
}
