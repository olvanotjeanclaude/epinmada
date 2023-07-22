<?php

namespace App\Http\Controllers\api;

use App\Helpers\ImageUpload;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FileController extends Controller
{
    public function generateKey()
    {
        $key = Str::uuid()->toString();

        return response()->json(["key" => $key]);
    }

    public function upload(Request $request)
    {
        $request->validate([
            "files" => "required",
            "model" => "required"
        ]);

        $files = $request->file("files");


        if (is_array($files)) {
            foreach ($files as $key => $file) {
                // $path =  ImageUpload::upload(rand(1111, 4444), $request->model, $file);
            }
        }

        return response()->json([
            "message" => "Fichier téléchargé avec succès",
            "type" => "success"
        ]);
    }
}
