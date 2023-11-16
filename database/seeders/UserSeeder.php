<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        $users = [
            [
                "name" => "Admin",
                "surname" => "Admin",
                "type" => User::TYPES["admin"],
                "phone" => "05418869037",
                "email" => "admin@epin.com",
                "password" => Hash::make("123456"),
                "status" =>true
            ],
            [
                "name" => "Bona",
                "surname" => "Armand",
                "type" => User::TYPES["admin"],
                "phone" => "0541000000",
                "email" => "bona@gmail.com",
                "password" => Hash::make("123456"),
                "status" =>true
            ],
            [
                "name" => "Jess",
                "surname" => "Jess",
                "type" => User::TYPES["staff"],
                "phone" => "0541000000",
                "email" => "jess@gmail.com",
                "password" => Hash::make("123456"),
                "status" =>true
            ],
            [
                "name" => "Ivanna",
                "surname" => "Trecha",
                "type" => User::TYPES["staff"],
                "phone" => "0541000000",
                "email" => "ivanna@gmail.com",
                "password" => Hash::make("123456"),
                "status" =>true
            ],
        ];

        foreach ($users as $key => $user) {
            User::create($user);
        }

        // User::factory(200)->create();
    }
}
