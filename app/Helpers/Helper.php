<?php

use Illuminate\Support\Facades\Auth;

if (!function_exists("delete_image")) {
    function delete_image($image)
    {
        if ($image && file_exists($image)) {
            unlink($image);
            return true;
        }
        return false;
    }
}

function currenUser()
{
    return request()->user();
}


function deleteImage($image)
{
    if ($image && file_exists($image)) {
        unlink($image);
        return true;
    }

    return false;
}

function formatPrice($price)
{
    $price = str_replace([".", ","], ["", "."], $price);

    if (is_numeric($price)) {
        $price =  number_format($price, 2, ",", ".");
        $array = explode(",", $price);
        $price = isset($array[1]) && $array[1] > 0 ? $price : $array[0];
        return $price . " ₺";
    }

    return "Belirtilmemiş";
}

function getImage($image)
{
    if(!str_contains($image,"http")){
        return $image && file_exists($image) ? asset($image) : asset("assets/image/not-found.jpg");
    }

    return $image;
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



function generateAdvertNo()
{
    return  mt_rand(1000000, 9999999);
}

function currentUser()
{
    if (Auth::check()) {
        return request()->user();
    }
}

function getUserPemission()
{
    return request()->user()->getUserPemission();
}

function getMenuName($url, $requestPath, $icon, $normal = "", $myNormal = "")
{
    $text = "";
    $isActive = request()->is($requestPath) ? 'active' : '';

    if (auth()->user()->is_company || currenUser()->is_personel) {
        $text = $myNormal;
    } else {
        $text = $normal;
    }

    $html = "<a href='$url' class='nav-link $isActive'>
                <i class='nav-icon $icon'></i>
                <p>
                    $text
                </p>
            </a>";

    return $html;
}
