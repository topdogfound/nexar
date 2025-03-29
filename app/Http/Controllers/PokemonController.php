<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PokemonController extends Controller
{
    public function index(Request $request)
    {
        $start = max((int) $request->get('start', 0), 0);
        $limit = min(max((int) $request->get('limit', 15), 1), 100);

        $total = Pokemon::count();

        $pokemons = Pokemon::skip($start)->limit($limit)->get();

        return Inertia::render('Pokemons/Index', [
            'pokemons' => $pokemons,
            'start' => $start,
            'limit' => $limit,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $pokemon = Pokemon::findOrFail($id);
        return Inertia::render('Pokemons/Show', [
            'pokemon' => $pokemon
        ]);
    }
}
