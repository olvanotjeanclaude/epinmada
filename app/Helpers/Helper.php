<?php

use Illuminate\Support\Facades\Auth;

function currenUser()
{
    return request()->user();
}

function deleteFile($file)
{
    if ($file && file_exists($file)) {
        unlink($file);
        return true;
    }

    return false;
}

function getImage($image)
{
    if (!str_contains($image, "http")) {
        return $image && file_exists($image) ? asset($image) : asset("assets/image/not-found.jpg");
    }

    return $image;
}

function formatPrice($price)
{
    $price = intval($price);

    if (is_numeric($price)) {
        $price =  number_format($price, 0, ',', ' ');
        return $price . " Ariary";
    }

    return "0 arairy";
}


function getFileExtensionByFilename($filename)
{
    $extension = "";
    $extensions = explode(".", $filename);

    if ($filename) {
        $extension = $extensions[count($extensions) - 1] ?? "";
    }

    return ".$extension";
}

function getFile($file)
{
    return $file && file_exists($file) ? asset($file) : asset("front_assets/image/image-not-found.jpg");
}


function format_date($date, $separator = ".")
{
    return date("d" . $separator . "m" . $separator . "Y", strtotime($date));
}

function format_date_time($date, $separator = ".", $reverse = false)
{
    $datetime = date("d" . $separator . "m" . $separator . "Y" . " H:i:s", strtotime($date));

    if ($reverse) {
        $datetime = str_replace(" ", "T", date("Y-m-d H:m:s", strtotime($date)));
    }

    return $datetime;
}

function roundNumber($number)
{
    if (is_numeric($number)) {
        $numbers = explode(".", $number);

        if (isset($numbers[1])) {
            $decimalPart = (int) $numbers[1];
            if ($decimalPart == 0) {
                $number = intval($number);
            }
        }
    }
    return $number;
}



function generateNo()
{
    return  mt_rand(1000000, 9999999);
}

function currentUser()
{
    if (Auth::check()) {
        return request()->user();
    }
}
