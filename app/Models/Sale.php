<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $primaryKey ="unique_id";
    public $incrementing = false;

    const STATUS = [
        "paid" => "payé",
        "pending" => "en attente",
        "cancelled" => "annulé"
    ];

    protected $fillable = [
        "unique_id",
        "payment_mode",
        "amount",
        "pubg_id",
        "invoice_image",
        "status",
        "user_id",
        "customer_id",
        "note"
    ];


    public function customer()
    {
        return $this->belongsTo(User::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getStatusTextAttribute()
    {
        return self::STATUS[$this->status] ?? "";
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }
}
