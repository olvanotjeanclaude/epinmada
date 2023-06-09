<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get("clear_cache",function(){
  Artisan::call("cache:clear");
  Artisan::call("config:cache");
  Artisan::call("optimize");
  echo "cache cleared";
});

Route::get('/token', function (Request $request) {
  return $request->session()->token();
});

Route::post("auth-social/{social}",[\App\Http\Controllers\Auth\SocialController::class,"authSocial"]);

Route::get("/login",[\App\Http\Controllers\Auth\LoginController::class, "showLoginForm"] )->name("showLoginForm");
Route::post("/login",[\App\Http\Controllers\Auth\LoginController::class, "login"] );

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(["middleware" =>"auth:sanctum"],function(){
    Route::resource("users", App\Http\Controllers\admin\UserController::class);
    Route::resource("products", App\Http\Controllers\admin\ProductController::class);
});