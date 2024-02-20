<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $primaryKey ="unique_id";
    public $incrementing = false;

    protected $appends = ["statusText"];

    const STATUS = [
        "paid" => "payé et livré",
        "pending" => "en attente",
        "cancelled" => "annulé"
    ];

    protected $fillable = [
        "status",
        "unique_id",
        "payment_mode",
        "amount",
        "invoice_image",
        "status",
        "user_id",
        "customer_id",
        "note",
        "transaction"
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

    public function getFormattedAmountAttribute(){
       $amount= $this->orders->sum("sub_amount");

       return formatPrice($amount);
    }
}
