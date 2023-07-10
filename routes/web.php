<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

Auth::routes();

Route::group(["prefix" => "auth", "as" => "auth.", "middleware" => "auth"], function () {
    Route::get("/lock-screen", [\App\Http\Controllers\Auth\LoginController::class, "lockScreen"])->name("lockScreen");
});
    
Route::group(["prefix" => "admin", "as" => "admin.", "middleware" => "auth"], function () {
    Route::get("/", [\App\Http\Controllers\admin\DashboardController::class, "index"])->name("index");
    Route::get("/profile", [\App\Http\Controllers\admin\ProfileController::class, "profile"])->name("profile");
    Route::post("/profile", [\App\Http\Controllers\admin\ProfileController::class, "updateProfile"])->name("updateProfile");
});

Route::group(["as" => "front."], function () {
    Route::get('/', [\App\Http\Controllers\FrontController::class, "index"])->name("index");
    Route::get('/contact', [\App\Http\Controllers\FrontController::class, "getContact"])->name("getContact");
    Route::get('/propos-de-nous', [\App\Http\Controllers\FrontController::class, "getAboutUs"])->name("getAboutUs");
    Route::get('/boutiques', [\App\Http\Controllers\FrontController::class, "allServices"])->name("allServices");
    Route::get('/boutiques/epin/{slug}', [\App\Http\Controllers\FrontController::class, "getEpin"])->name("getEpin");
    Route::resource("baskets", \App\Http\Controllers\BasketController::class);
    Route::get('/panier', [\App\Http\Controllers\BasketController::class, "cart"])->name("cart");
    Route::post('/empty-panier', [\App\Http\Controllers\BasketController::class, "emptyCart"])->name("emptyCart");
    Route::post('/update-quantity/{basket}', [\App\Http\Controllers\BasketController::class, "updateQuantity"])->name("updateQuantity");
    Route::get('/{slug}', [\App\Http\Controllers\FrontController::class, "getProducts"])->name("getProducts");
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
