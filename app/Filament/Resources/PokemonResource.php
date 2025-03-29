<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PokemonResource\Pages;
use App\Filament\Resources\PokemonResource\RelationManagers;
use App\Models\Pokemon;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PokemonResource extends Resource
{
    protected static ?string $model = Pokemon::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    
    protected static ?string $navigationGroup = 'Testing Data Sets';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Forms\Components\TextInput::make('name'),
                // Forms\Components\TextInput::make('type'),
                // Forms\Components\TextInput::make('hp'),
                // Forms\Components\TextInput::make('attack'),
                // Forms\Components\TextInput::make('defense'),
                // Forms\Components\TextInput::make('speed'),

                Forms\Components\TextInput::make('name')
                ->required()
                ->maxLength(100)
                ->placeholder('e.g., Pikachu'),

                Forms\Components\TagsInput::make('types')
                    ->label('Types')
                    ->required()
                    ->placeholder('e.g., Electric, Flying'),

                Forms\Components\FileUpload::make('sprite')
                    ->image()
                    ->required()
                    ->directory('sprites')
                    ->imagePreviewHeight('150')
                    ->hint('Upload Pokémon sprite'),

                Forms\Components\Textarea::make('description')
                    ->maxLength(255)
                    ->placeholder('Pokédex entry'),

                Forms\Components\Fieldset::make('Base Stats')
                    ->schema([
                        Forms\Components\TextInput::make('hp')->numeric()->required(),
                        Forms\Components\TextInput::make('attack')->numeric()->required(),
                        Forms\Components\TextInput::make('defense')->numeric()->required(),
                        Forms\Components\TextInput::make('speed')->numeric()->required(),
                    ]),

                Forms\Components\TextInput::make('height')
                    ->numeric()
                    ->step(0.01)
                    ->label('Height (m)'),

                Forms\Components\TextInput::make('weight')
                    ->numeric()
                    ->step(0.01)
                    ->label('Weight (kg)'),

                Forms\Components\Toggle::make('legendary')
                    ->label('Is Legendary?')
                    ->inline(),

                Forms\Components\TextInput::make('evolves_from')
                    ->nullable()
                    ->placeholder('Optional, e.g., Pichu'),

                Forms\Components\Repeater::make('abilities')
                    ->label('Abilities')
                    ->schema([
                        Forms\Components\TextInput::make('name')->required(),
                        Forms\Components\Textarea::make('description')->maxLength(150),
                    ])
                    ->defaultItems(1)
                    ->collapsible(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                
                // Tables\Columns\TextColumn::make('name'),
                // Tables\Columns\TextColumn::make('type'),
                // Tables\Columns\TextColumn::make('hp'),
                // Tables\Columns\TextColumn::make('attack'),
                // Tables\Columns\TextColumn::make('defense'),
                // Tables\Columns\TextColumn::make('speed'),
                Tables\Columns\ImageColumn::make('sprite')
                ->label('Sprite')
                ->circular()
                ->size(40),

                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('types')
                    ->badge() // optional if you want tag-style visuals
                    ->separator(', '),

                Tables\Columns\TextColumn::make('hp')->sortable(),
                Tables\Columns\TextColumn::make('attack')->sortable(),
                Tables\Columns\TextColumn::make('defense')->sortable(),
                Tables\Columns\TextColumn::make('speed')->sortable(),

                Tables\Columns\IconColumn::make('legendary')
                    ->boolean()
                    ->label('Legendary'),
            ])
            ->filters([
                Tables\Filters\Filter::make('legendary')
                ->query(fn ($query) => $query->where('legendary', true))
                ->label('Legendary Only'),

                Tables\Filters\SelectFilter::make('types')
                    ->options([
                        'Electric' => 'Electric',
                        'Fire' => 'Fire',
                        'Water' => 'Water',
                        'Grass' => 'Grass',
                        'Normal' => 'Normal',
                        'Flying' => 'Flying',
                        // Add more types as needed
                    ])
                    ->multiple()
                    ->label('Type Filter')
                    ->query(function ($query, $data) {
                        if (filled($data['values'])) {
                            $query->whereIn('types', $data['values']);
                        }
                    }),
            ])
            ->searchable()
            ->defaultSort('name')
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPokemon::route('/'),
            'create' => Pages\CreatePokemon::route('/create'),
            'edit' => Pages\EditPokemon::route('/{record}/edit'),
        ];
    }
    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
    public static function getNavigationBadgeColor(): ?string
    {
        return static::getModel()::count() > 10 ? 'warning' : 'primary';
    }

    public static function getNavigationBadgeTooltip(): ?string
    {
        return 'The number of Pokemons';
    }




}
