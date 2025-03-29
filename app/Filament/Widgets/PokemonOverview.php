<?php

namespace App\Filament\Widgets;


use App\Models\Pokemon;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Card;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\DB;

class PokemonOverview extends BaseWidget
{
    protected function getHeading(): string
    {
        return 'Pokémon Overview';
    }

    protected function getCards(): array
    {
        $total = Pokemon::count();
        $legendaryCount = Pokemon::where('legendary', true)->count();
        $averageHp = Pokemon::avg('hp') ?? 0;
        $averageAttack = Pokemon::avg('attack') ?? 0;
        $averageDefense = Pokemon::avg('defense') ?? 0;
        $averageSpeed = Pokemon::avg('speed') ?? 0;

        // Get Most Common Type
        $mostCommonType = Pokemon::raw(function($collection) {
            return $collection->aggregate([
                ['$unwind' => '$types'],
                ['$group' => ['_id' => '$types', 'count' => ['$sum' => 1]]],
                ['$sort' => ['count' => -1]],
                ['$limit' => 1],
            ]);
        })->toArray();

        $mostCommonType = $mostCommonType[0]['_id'] ?? 'Unknown';

        return [
            Stat::make('Total Pokémons', $total)
                ->description('Total registered Pokémon in the system')
                ->color('success'),

            Stat::make('Legendary Pokémons', $legendaryCount)
                ->description('Total legendary Pokémon')
                ->color('warning'),

            Stat::make('Average HP', number_format($averageHp, 2))
                ->color('info'),

            Stat::make('Average Attack', number_format($averageAttack, 2))
                ->color('info'),

            Stat::make('Average Defense', number_format($averageDefense, 2))
                ->color('info'),

            Stat::make('Average Speed', number_format($averageSpeed, 2))
                ->color('info'),

            Stat::make('Most Common Type', ucfirst($mostCommonType))
                ->description('Most frequently used type among all Pokémon')
                ->color('primary'),
        ];
    }
    
}
