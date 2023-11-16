<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Basket;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Http;
use Laravel\Socialite\Facades\Socialite;

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

    // use AuthenticatesUsers;

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
            // $this->middleware('guest')->except('logout');
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

        $credentials["status"] = true;


        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $user->tokens()->delete();

            $ability = $user->type == User::TYPES["client"] ? "customer" : "administration";

            $token = Auth::user()->createToken("access_token", [$ability])->plainTextToken;

            if ($request->ajax()) {
                return response()->json([
                    'token_type' => 'Bearer',
                    "type" => array_search($user->type, User::TYPES),
                    "token" => $token
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

    public function socialiteRedirect($socialite)
    {
        abort_if(!in_array($socialite, User::SOCIALITES), 404);

        return Socialite::driver($socialite)->redirect();
    }

    public function socialiteCallback($socialite)
    {
        abort_if(!in_array($socialite, User::SOCIALITES), 404);

        $user = null;

        switch ($socialite) {
            case 'google':
                $googleUser = Socialite::driver("google")->user()->user;
                $user = $this->saveGoogleUser($googleUser);
                break;
            case 'facebook':
                $facebookUser = Socialite::driver("facebook")->user();
                $user = $this->saveFacebookUser($facebookUser);
                break;
            default:
                abort(404);
                break;
        }


        Auth::login($user);

        return redirect("/u");
    }


    private function saveGoogleUser($googleUser): User
    {
        $user = User::where("google_id", $googleUser["id"])->first();

        if (is_null($user)) {
            $user = User::create([
                "name" => $googleUser["given_name"],
                "surname" => $googleUser["family_name"],
                "image" => $googleUser["picture"],
                "email" => $googleUser["email"],
                "google_id" => $googleUser["id"],
                "status" => true
            ]);
        }

        return $user;
    }

    private function saveFacebookUser($facebookUser): User
    {
        $user = User::where("facebook_id", $facebookUser["id"])->first();

        $fullname =  explode(" ", $facebookUser->name);

        if (is_null($user)) {
            $user = User::create([
                "name" => $fullname[0] ?? "",
                "surname" =>  join(" ", array_slice($fullname, 1)) ?? "",
                "image" => $facebookUser->avatar,
                "email" => $facebookUser->email,
                "facebook_id" => $facebookUser->id,
                "status" => true
            ]);
        }

        return $user;
    }
}
