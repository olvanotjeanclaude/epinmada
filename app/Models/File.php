<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = ["path", "key", "model", "action", "user_id"];

    const ACTION = [
        "create" => "create",
        "update" => "update",
    ];

    const STATUS = [
        "pending" => 0,
        "done" => 1,
    ];
}
