<?php

namespace App\Http\Controllers\api\front;

use App\Helpers\Message;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactUsController extends Controller
{
    public function index()
    {
        $contacts = ContactUs::where(function ($query) {

            $search = request("query");
            $query->where("name", "LIKE", "%$search%")
                ->orWhere("surname", "LIKE", "%$search%")
                ->orWhere("phone", "LIKE", "%$search%")
                ->orWhere("email", "LIKE", "%$search%")
                ->orWhere("subject", "LIKE", "%$search%");
        })
            ->orderBy("id", "desc")->paginate(10);

        return response()->json($contacts);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => "required",
            "surname" => "required",
            "email" => "required",
            "phone" => "required",
            "body" => "required",
            "subject" => "required",
        ], [
            "name.required" => "Nom ne peut pas être vide",
            "surname.required" => "Prénom ne peut pas être vide",
            "email.required" => "Email ne peut pas être vide",
            "phone.required" => "Téléphone ne peut pas être vide",
            "body.required" => "Message ne peut pas être vide",
            "subject.required" => "Objet ne peut pas être vide",
        ]);

        ContactUs::create($data);

        return Message::success("Votre message");
    }

    public function update($id, Request $request)
    {
        $contact = ContactUs::findOrFail($id);

        if ($request->seen) $contact->update(["status" => "seen"]);

        return response()->json(["success" => "Message status updated to seen"]);
    }

    public function destroy($id)
    {
        $contact = ContactUs::findOrFail($id);

        $contact->delete();

        return Message::delete(("Contact"));
    }
}
