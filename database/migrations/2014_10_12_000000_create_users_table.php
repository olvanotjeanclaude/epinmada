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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->string("province")->nullable();
            $table->string("district")->nullable();
            $table->string("neighborhood")->nullable();
            $table->string("address")->nullable();
            $table->integer("type")->default(3);
            $table->string('identity_number')->nullable();
            $table->string("phone")->nullable();
            $table->string('email')->unique();
            $table->string("image")->nullable();
            $table->string("google_id")->nullable();
            $table->string("facebook_id")->nullable();
            $table->json("social_value")->nullable();
            $table->string('password');
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
        Schema::dropIfExists('users');
    }
};
