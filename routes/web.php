<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(["as" => "front."], function () {
    Route::get('/', [\App\Http\Controllers\FrontController::class, "index"])->name("index");
    Route::get('/contact', [\App\Http\Controllers\FrontController::class, "getContact"])->name("getContact");
    Route::get('/propos-de-nous', [\App\Http\Controllers\FrontController::class, "getAboutUs"])->name("getAboutUs");
    Route::get('/boutiques', [\App\Http\Controllers\FrontController::class, "allServices"])->name("allServices");
    Route::get('/boutiques/epin/{slug}', [\App\Http\Controllers\FrontController::class, "getEpin"])->name("getEpin");
    Route::resource("baskets", \App\Http\Controllers\BasketController::class);
    Route::get('/{slug}', [\App\Http\Controllers\FrontController::class, "getProducts"])->name("getProducts");
});
