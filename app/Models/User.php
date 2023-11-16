<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    const SOCIALITES = ["google", "facebook"];

    const TYPES = [
        "admin" => 1,
        "staff" => 2,
        "client" => 3
    ];

    protected $fillable = [
        "status",
        "confirmation_token",
        "email_verified_at",
        "name",
        "surname",
        "is_team",
        "province",
        "district",
        "neighborhood",
        "address",
        "type",
        "identity_number",
        "phone",
        "email",
        "image",
        "google_id",
        "facebook_id",
        "password",
    ];

    protected $hidden = [
        'password',
        'remember_token',
        "social_value"
    ];

    protected $appends = ["typeText", "full_name"];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getTypeTextAttribute()
    {
        switch ($this->type) {
            case self::TYPES["admin"]:
                $type = "Admin";
                break;
            case self::TYPES["staff"]:
                $type = "Personel";
                break;
            case self::TYPES["client"]:
                $type = "Client";
                break;

            default:
                $type = "Inconnu";
                break;
        }

        return $type;
    }

    public function isCustomer()
    {
        array_search($this->type, User::TYPES) == "client";
    }

    public function getFullNameAttribute()
    {
        return Str::title("$this->name $this->surname");
    }

    public function scopeCustomers($query)
    {
        return $query->where("type", self::TYPES["client"]);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class, "customer_id");
    }
}
