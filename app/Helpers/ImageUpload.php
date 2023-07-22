<?php

namespace App\Helpers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ImageUpload
{
    const ALLOWED = ".png,.PNG,.jpg,.JPG,.gif,.GIF,.jpeg,.JPEG";

    const MAX_SIZE = 15; // 15 MB

    public static function upload($name, $directory, $file)
    {
        $dir = "uploads/" . $directory;

        return self::saveFile($name, $dir, $file);
    }

    public static function saveFile($name, $directory, $file)
    {
        if ($file) {
            if (!File::exists($directory)) {
                File::makeDirectory($directory, 0755, true);
            }

            $fileName = $name . "." . $file->getClientOriginalExtension();
            $path = $directory . '/' . $fileName;

            if ($file) {
                $file->move($directory, $fileName);
            }
            return $path;
        }

        return "";
    }

    public static function randomImage()
    {
        $directory = "front_assets/random-images";
        $images  = scandir(public_path($directory));
        $images = array_diff($images, array('.', '..'));

        $randomKey = array_rand($images);

        $fileName =  $images[$randomKey] ?? "";

        return "$directory/$fileName";
    }
}
