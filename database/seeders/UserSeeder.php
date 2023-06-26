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
                "name" => "Olvanot Jean Claude",
                "surname" => "Rakotonirina",
                "type" => User::TYPES["admin"],
                "phone" => "05418869037",
                "email" => "olvanotjcs@gmail.com",
                "password" => Hash::make("123456")
            ],
            [
                "name" => "Bona",
                "surname" => "Armand",
                "type" => User::TYPES["admin"],
                "phone" => "0541000000",
                "email" => "bona@gmail.com",
                "password" => Hash::make("123456")
            ],
            [
                "name" => "Jess",
                "surname" => "Jess",
                "type" => User::TYPES["staff"],
                "phone" => "0541000000",
                "email" => "jess@gmail.com",
                "password" => Hash::make("123456")
            ],
            [
                "name" => "Ivanna",
                "surname" => "Trecha",
                "type" => User::TYPES["staff"],
                "phone" => "0541000000",
                "email" => "ivanna@gmail.com",
                "password" => Hash::make("123456")
            ],
        ];

        foreach ($users as $key => $user) {
            User::create($user);
        }

        User::factory(10)->create();
    }
}
