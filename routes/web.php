<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PokemonController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    Route::get('/pokemons', [PokemonController::class, 'index'])->name('pokemons.index');
    Route::get('/pokemons/{id}', [PokemonController::class, 'show'])->name('pokemons.show');
    Route::get('/tick-tack-toe', function () {
        return Inertia::render('tick-tack-toe');
    });

});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
