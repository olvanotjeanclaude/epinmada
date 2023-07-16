<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
            "type" => "required",
            "name" => "required",
            "surname" => "required",
            "phone" => "required",
            "email" => Rule::unique('users')->ignore($this->id),
            "password" => request()->routeIs("users.update") ? "" : "required|confirmed",
            "password_confirmation" => request()->routeIs("users.update") ? "" : "required",
        ];
    }
}
