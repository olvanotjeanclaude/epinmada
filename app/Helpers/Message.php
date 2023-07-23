<?php

namespace App\Helpers;

class Message
{
    public static function success($model)
    {
        return response()->json([
            "code" => 200,
            'type' => "success",
            "message" => "$model a été sauvegardé avec succès"
        ]);
    }

    public static function error($messsage = "Erreur survenue", $code = 422)
    {
        return response()->json([
            "code" => $code,
            'type' => "error",
            "message" => $messsage
        ]);
    }

    public static function delete($model = "data")
    {
        return response()->json([
            "code" => 200,
            'type' => "success",
            "message" => "$model a été supprimé avec succès"
        ]);
    }
}
