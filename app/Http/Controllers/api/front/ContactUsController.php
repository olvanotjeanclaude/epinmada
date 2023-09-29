<?php

namespace App\Http\Controllers\api\front;

use App\Helpers\Message;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactUsController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => "required",
            "surname" => "required",
            "email" => "required",
            "phone" => "required",
            "body" => "required",
            "subject" => "required",
        ],[
            "name.required" =>"Nom ne peut pas être vide",
            "surname.required" =>"Prénom ne peut pas être vide",
            "email.required" =>"Email ne peut pas être vide",
            "phone.required" =>"Téléphone ne peut pas être vide",
            "body.required" =>"Message ne peut pas être vide",
            "subject.required" =>"Objet ne peut pas être vide",
        ]);

        ContactUs::create($data);

        return Message::success("Votre message");
    }
}
