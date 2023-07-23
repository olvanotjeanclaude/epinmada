<?php

namespace App\Http\Requests;

use App\Traits\Error;
use Illuminate\Foundation\Http\FormRequest;

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
        ];
    }
}
