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
            $table->string("api_unique_id");
            $table->enum("status", array_keys(Sale::STATUS));
            $table->string("payment_mode");
            $table->decimal("amount");
            $table->json("transaction")->nullable();
            $table->text("comment")->nullable();
            $table->string("invoice_image")->nullable();
            $table->string("payment_phone_number", 15);
            $table->string("pubg_id")->nullable();
            $table->string("reference", 20)->nullable();
            $table->unsignedBigInteger("customer_id");
            $table->unsignedBigInteger("user_id")->default(0);
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
