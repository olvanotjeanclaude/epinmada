<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("unique_id");
            $table->boolean("status")->default(true);
            $table->string("name");
            $table->string("slug");
            $table->decimal("price");
            $table->string("image_url")->nullable();
            $table->unsignedBigInteger("category_id");
            $table->boolean("is_top")->default(false);
            $table->text("short_description")->nullable();
            $table->longText("long_description")->nullable();
            $table->integer("rating")->default(0);
            $table->unsignedBigInteger("user_id");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
