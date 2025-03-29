<?php

namespace App\Filament\Resources\PokemonResource\Pages;

use App\Filament\Resources\PokemonResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreatePokemon extends CreateRecord
{
    protected static string $resource = PokemonResource::class;
}
