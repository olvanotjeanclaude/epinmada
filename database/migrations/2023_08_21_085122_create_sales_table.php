<?php

use App\Models\Sale;
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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->string("unique_id");
            $table->string("payment_mode");
            $table->string("pubg_id")->nullable();
            $table->text("comment")->nullable();
            $table->string("invoice_image")->nullable();
            $table->string("status")->default("pending");
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("customer_id");
            $table->text("note")->nullable();
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
        Schema::dropIfExists('sales');
    }
};
