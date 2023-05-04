<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

   
    const TYPES = [
        "admin" => 1,
        "staff" => 2,
        "customer" => 3
    ];

    protected $fillable = [
        'name',
        'surname',
        'identity_number',
        'phone',
        'email',
        'password',
        "google_id",
        "image",
        "facebook_id",
        "social_value"
    ];
    
    protected $hidden = [
        'password',
        'remember_token',
        "social_value"
    ];

    protected $appends= ["typeText"];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getTypeTextAttribute(){
        switch ($this->type) {
            case self::TYPES["admin"]:
                $type ="Admin";
                break;
            case self::TYPES["staff"]:
                $type ="Personel";
                break;
            case self::TYPES["customer"]:
                $type ="Client";
                break;
            
            default:
                $type ="Inconnu";
                break;
        }

        return $type;
    }
}
