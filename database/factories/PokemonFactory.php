<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PokemonFactory extends Factory
{
    public function definition(): array
    {
        $types = ['Fire', 'Water', 'Electric', 'Grass', 'Normal', 'Flying', 'Poison', 'Fairy', 'Bug', 'Rock'];

        return [
            'name' => $this->faker->unique()->word(),
            'types' => $this->faker->randomElements($types, rand(1, 2)),

            'description' => $this->faker->sentence(),

            'sprite' => 'sprites/' . $this->faker->uuid . '.png', // We'll fake the path, real images will be handled later

            'hp' => $this->faker->numberBetween(20, 150),
            'attack' => $this->faker->numberBetween(20, 150),
            'defense' => $this->faker->numberBetween(20, 150),
            'speed' => $this->faker->numberBetween(20, 150),

            'height' => $this->faker->randomFloat(2, 0.3, 3.0),
            'weight' => $this->faker->randomFloat(2, 2.0, 300.0),

            'legendary' => $this->faker->boolean(10), // 10% chance to be legendary

            'evolves_from' => $this->faker->optional()->word(),

            'abilities' => collect(range(1, rand(1, 3)))->map(function () {
                return [
                    'name' => $this->faker->word(),
                    'description' => $this->faker->sentence(),
                ];
            })->toArray(),
        ];
    }
}
