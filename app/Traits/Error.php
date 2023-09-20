<?php

namespace App\Traits;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

trait Error
{
    protected function failedValidation(Validator $validator)
    {
        $message = array_values($validator->errors()->toArray());

        throw new HttpResponseException(
            response()->json([
                "code" => 422,
                'type' => "error",
                'message' => $message[0][0]??"Erreur survenue",
                'errors' => $validator->errors(),
            ], 200)
        );
    }
}
