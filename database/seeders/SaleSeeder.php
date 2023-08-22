<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use App\Constants\PaymentMethod;
use App\Models\Order;
use App\Models\Product;
use App\Models\Sale;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    private function randomUserID($type)
    {
        return User::where("type", $type)
            ->inRandomOrder()
            ->first()->id;
    }

    private function random($array)
    {
        return array_rand($array);
    }

    private function randomStatus()
    {
        $payments = array_keys(Sale::STATUS);
        return array_rand($payments);
    }

    public function run()
    {
        $this->generateSale(3, "EPIN");
    }


    private function generateSale($total, $type)
    {
        for ($i = 0; $i < $total; $i++) {
            $data =  [
                "payment_mode" => $this->random(PaymentMethod::MOBILE),
                "pubg_id" => $type == "EPIN" ? strtoupper(Str::random(8)) : "",
                "unique_id" =>generateNo(),
                "invoice_image" => "",
                "user_id" => $this->randomUserID(User::TYPES["admin"]),
                "customer_id" => $this->randomUserID(User::TYPES["client"]),
            ];

            $sale = Sale::create($data);

            Product::whereHas("category", function ($query) {
                $query->where("name", "LIKE", "epin");
            })->inRandomOrder()
                ->limit(rand(2, 5))
                ->get()
                ->each(function ($epin) use ($sale) {
                    $total = rand(1,5);
                    Order::create([
                        "product_unique_id" => $epin->unique_id,
                        "sale_unique_id" => $sale->unique_id,
                        "price" => $epin->price,
                        "quantity" =>$total
                    ]);
                });
        }
    }
}
