<?php

namespace App\Http\Requests;

use App\Traits\Error;
use Illuminate\Foundation\Http\FormRequest;

class SaleRequest extends FormRequest
{
   use Error;

    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "pubg_id" => request("pubg_id") ? "required":"",
            "paymentMethod" => "required",
        ];
    }
}
