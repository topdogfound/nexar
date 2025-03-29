<?php

namespace App\Filament\Resources\PokemonResource\Pages;

use App\Filament\Resources\PokemonResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPokemon extends EditRecord
{
    protected static string $resource = PokemonResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
