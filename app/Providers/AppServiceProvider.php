<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('path.public', function () {
            $entryPoint = env("APP_ENTRY_POINT_PATH");

            if ($entryPoint && is_dir(base_path($entryPoint))) {
                return base_path(env("APP_ENTRY_POINT_PATH"));
            }

            return base_path("../public_html/epin.suarego.com");
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        Paginator::useBootstrapFive();

        JsonResource::withoutWrapping();
    }
}
