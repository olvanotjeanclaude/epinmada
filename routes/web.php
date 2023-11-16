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

Route::view('/sign-in', "auth.sign-in")->name("signInForm");
Route::view('/sign-up', "auth.sign-up")->name("signUpForm");
Route::get("verify-email/{confirmation_token}", [\App\Http\Controllers\Auth\RegisterController::class, "confirmToken"])->name("auth.confirmToken");
Route::get("/auth/{socialite}/redirect", [\App\Http\Controllers\Auth\LoginController::class, "socialiteRedirect"])->name("socialite.redirect");
Route::get("/auth/{socialite}/callback", [\App\Http\Controllers\Auth\LoginController::class, "socialiteCallback"])->name("socialite.callback");

Route::group(["prefix" => "auth", "as" => "auth.", "middleware" => "auth"], function () {
    Route::get("/lock-screen", [\App\Http\Controllers\Auth\LoginController::class, "lockScreen"])->name("lockScreen");
});

Route::view('/admin/{any_path?}', 'admin')->where('any_path', '(.*)');
Route::view('/u/{any_path?}', 'user')->where('any_path', '(.*)');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(["as" => "front."], function () {
    Route::get('/', [\App\Http\Controllers\FrontController::class, "index"])->name("index");
    Route::get('/contact', [\App\Http\Controllers\FrontController::class, "getContact"])->name("getContact");
    Route::get('/propos-de-nous', [\App\Http\Controllers\FrontController::class, "getAboutUs"])->name("getAboutUs");
    Route::get('/boutiques', [\App\Http\Controllers\FrontController::class, "allServices"])->name("allServices");
    Route::get('/boutiques/{category}/{slug}', [\App\Http\Controllers\FrontController::class, "getProduct"])->name("getProduct");

    // Route::get('/boutiques/epin/{slug}', [\App\Http\Controllers\FrontController::class, "getEpin"])->name("getEpin");
    Route::resource("baskets", \App\Http\Controllers\BasketController::class);
    Route::get('/panier', [\App\Http\Controllers\BasketController::class, "cart"])->name("cart");
    Route::post('/empty-panier', [\App\Http\Controllers\BasketController::class, "emptyCart"])->name("emptyCart");
    Route::post('/update-quantity/{basket}', [\App\Http\Controllers\BasketController::class, "updateQuantity"])->name("updateQuantity");
    Route::get('/{slug}', [\App\Http\Controllers\FrontController::class, "getProducts"])->name("getProducts");
});
