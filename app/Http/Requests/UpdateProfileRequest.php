<?php

namespace App\Http\Requests;

use App\Traits\Error;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
            "name" =>   "required",
            "surname" =>   "required",
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore(auth()->id()),
            ],
            "phone" =>   "required",
        ];
    }
}
