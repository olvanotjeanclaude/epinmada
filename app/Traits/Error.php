<?php

namespace App\Traits;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

trait Error
{
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                "code" => 422,
                'type' => "error",
                'message' => 'Erreur survenue',
                'errors' => $validator->errors(),
            ], 200)
        );
    }
}
