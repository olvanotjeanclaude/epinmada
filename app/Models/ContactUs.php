<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
    ];

    protected $fillable = [
        "name",
        "surname",
        "email",
        "phone",
        "body",
        "subject",
        "status"
    ];
}
