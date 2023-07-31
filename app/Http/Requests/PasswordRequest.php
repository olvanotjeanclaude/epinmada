<?php

namespace App\Http\Requests;

use App\Traits\Error;
use Illuminate\Foundation\Http\FormRequest;

class PasswordRequest extends FormRequest
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
            "current_password" => "required",
            "password" => "required|confirmed",
        ];
    }
    public function messages()
    {
        return [
            "password.confirmed" => "Mot de passe ne correspond pas.",
        ];
    }
}
