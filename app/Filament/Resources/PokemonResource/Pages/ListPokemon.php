<?php

namespace App\Filament\Resources\PokemonResource\Pages;

use App\Filament\Resources\PokemonResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPokemon extends ListRecords
{
    protected static string $resource = PokemonResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
    protected function getHeaderWidgets(): array
{
    return [
        \App\Filament\Widgets\PokemonOverview::class,
    ];
}
}
