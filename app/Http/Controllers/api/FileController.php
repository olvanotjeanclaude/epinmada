<?php

namespace App\Http\Controllers\api;

use App\Helpers\ImageUpload;
use App\Helpers\Message;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\TempFile;

class FileController extends Controller
{
    public function generateKey()
    {
        $key = Str::uuid()->toString();

        return response()->json(["key" => $key]);
    }

    public function upload(Request $request)
    {
        $actions = join(",", File::ACTION);

        $data =  $request->validate([
            "files" => "required",
            "model" => "required",
            "action" => "required|in:$actions",
        ]);

        $files = $request->file("files");

        if (is_array($files)) {
            foreach ($files as $key => $file) {
                $data["path"] =  ImageUpload::upload(rand(1111, 4444), $request->model, $file);
                $data["user_id"] = auth()->id();
                $data["key"] = $request->key;
                
                File::create($data);
            }

            return response()->json([
                "message" => "Fichier téléchargé avec succès",
                "type" => "success"
            ]);
        }

        return Message::error("échec du téléchargement");
    }
}
