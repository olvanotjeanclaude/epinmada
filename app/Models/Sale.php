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
        "cancelled" => "annulé",
        "completed" => "payé",
        "failed" => "erreur",
    ];

    protected $fillable = [
        "status",
        "unique_id",
        "api_unique_id",
        "payment_mode",
        "amount",
        "invoice_image",
        "status",
        "user_id",
        "customer_id",
        "transaction",
        "comment",
        "payment_phone_number",
        "pubg_id",
        "reference",
        "object_reference",
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

    public function getTransactionAttribute($value){
        return json_decode($value);
    }
}
