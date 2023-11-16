<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Helpers\Message;
use App\Mail\EmailConfirm;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest');
    }


    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            "phone" =>["required"],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function signUp(Request $request)
    {
        $data = $request->validate([
            "name" => "required",
            "surname" => "required",
            "email" => "required|email|unique:users",
            "phone" =>"required",
            "password" => "required|same:confirm_password",
            "confirm_password" => "required"
        ], [
            "name.required" => "Nom ne peut pas être vide",
            "surname.required" => "Prénom ne peut pas être vide",
            "phone.required" => "Le champ téléphone est obligatoire.",
            "email.required" => "L'email ne peut pas être vide",
            "email.unique" => "L'email existe déjà. Veuillez entrer un nouvel e-mail",
            "password.required" => "le nom ne peut pas être vide",
            "password.same" => "Les mots de passe ne correspondent pas",
            "confirm_password.required" => "Confirmer le mot de passe",
        ]);

        
        $data["password"] = Hash::make($data["password"]);
        $data["confirmation_token"] =Str::random(10);
        
        $newUser = User::create($data);
        
        if ($newUser) {
            $this->sendEmailVerification($newUser);

            return response()->json([
                "code" => 200,
                'type' => "success",
                "message" => "Votre compte a été enregistré avec succès. Veuillez valider votre adresse e-mail pour activer votre compte."
            ]);
        }

        return Message::error("Erreur Inconnue. Veuillez réessayer plus tard", 500);
    }

    private function sendEmailVerification(User $user){
        try {
            Mail::to("olvanotjeanclaude@gmail.com")->send(new EmailConfirm($user));
        } catch (\Throwable $th) {
            Log::alert($th->getMessage());
            throw $th;
        }
    }

    public function confirmToken($token){
        $user = User::where("confirmation_token",$token)->whereNull("email_verified_at")->firstOrFail();

        $diffMinutes = now()->diffInMinutes($user->created_at);
        
        abort_if($diffMinutes >115,404,"Page introuvable");
        
        $user->update(["email_verified_at" =>now()->toDateTimeString(),"status" =>true]);

        return redirect("/sign-in")->with("success","compte activé avec succès");
    }
}
