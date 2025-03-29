<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';

    protected $fillable = [
        'name', 'types', 'description', 'sprite', 'hp', 'attack', 'defense',
        'speed', 'height', 'weight', 'legendary', 'evolves_from', 'abilities'
    ];

    protected $casts = [
        'types' => 'array',
        'abilities' => 'array',
        'legendary' => 'boolean',
    ];
}
