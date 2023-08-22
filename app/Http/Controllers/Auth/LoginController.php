<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Basket;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        if (!request()->ajax()) {
            $this->middleware('guest')->except('logout');
        }
    }

    public function signIn()
    {
        return view("auth.sign");
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ], [
            "email.required" => "Le champ email est obligatoire.",
            "email.email" => "L'e-mail doit être une adresse e-mail valide.",
            "password.required" => "Le champ mot de passe est obligatoire."
        ]);


        if (Auth::attempt($credentials)) {
            $user = $request->user();

            if ($request->ajax()) {
                return response()->json([
                    'token_type' => 'Bearer',
                    "user" => [
                        "name" => $user->name,
                        "surname" => $user->surname,
                        "email" => $user->email,
                        "type" => array_search($user->type, User::TYPES)
                    ]
                ]);
            }

            return redirect()->intended("/admin");
        }

        $errorMessages = "les informations d'identification invalides";

        if ($request->ajax()) {
            return response()->json(['message' => $errorMessages], 401);
        }

        return back()->withErrors(["errors" => $errorMessages]);
    }

    public function logout(Request $request)
    {
        $this->deleteBasket();

        Auth::logout();

        return response()->json([
            "code" => 200,
            'type' => "success",
            "message" => "vous êtes déconnecté avec succès"
        ]);
    }

    private function deleteBasket()
    {
        Basket::whereNull("user_id")
            ->where("anonymous_id", session("anonymous_id"))
            ->delete();

        session()->forget("anonymous_id");
    }
}
