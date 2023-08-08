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

Route::get("clear_cache", function () {
  Artisan::call("cache:clear");
  Artisan::call("config:cache");
  Artisan::call("optimize");
  echo "cache cleared";
});

Route::get('/token', function (Request $request) {
  return $request->session()->token();
});

Route::post("auth-social/{social}", [\App\Http\Controllers\Auth\SocialController::class, "authSocial"]);

Route::get("/login", [\App\Http\Controllers\Auth\LoginController::class, "showLoginForm"])->name("showLoginForm");
Route::post("/login", [\App\Http\Controllers\Auth\LoginController::class, "login"]);
Route::post("/logout", [\App\Http\Controllers\Auth\LoginController::class, "logout"]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::group(["middleware" => "auth:sanctum"], function () {
  Route::post("update-password", [\App\Http\Controllers\api\PasswordController::class,"updatePassword"]);
  Route::put("update-profile", [\App\Http\Controllers\api\ProfileController::class,"updateProfile"]);
  
  Route::resource("users", App\Http\Controllers\api\UserController::class);
  Route::resource("customers", App\Http\Controllers\api\CustomerController::class);
  Route::resource("products", App\Http\Controllers\api\ProductController::class);
  Route::resource("categories", App\Http\Controllers\api\CategoryController::class)->only("index");
 
  Route::get("constants", [\App\Http\Controllers\api\ConstantController::class, "constants"]);
  
  Route::prefix('files')->group(function () {
    Route::get("generate-key", [\App\Http\Controllers\api\FileController::class, "generateKey"]);
    Route::post("upload", [\App\Http\Controllers\api\FileController::class, "upload"]);
  });
});

