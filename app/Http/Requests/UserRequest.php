<?php

namespace App\Http\Requests;

use App\Traits\Error;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    use Error;

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "type" => "required",
            "name" => "required",
            "surname" => "required",
            "phone" => "required",
            "email" => Rule::unique('users')->ignore($this->id),
            "password" => request()->routeIs("users.update") ? "" : "required|confirmed",
            "password_confirmation" => request()->routeIs("users.update") ? "" : "required",
        ];
    }

    public function messages()
    {
        return [
            "type.required" =>"Veuillez entrer le type d'utilisateur"
        ];
    }
}
