import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {PokemonCard} from '@/components/pokemons/pokemon-card';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pokemons',
        href: '/pokemons',
    },
];
type Ability = {
    name: string
    description: string
}
  
type Pokemon = {
    id: string
    name: string
    types: string[]
    description: string
    sprite: string
    hp: number
    attack: number
    defense: number
    speed: number
    height: number
    weight: number
    legendary: boolean
    evolves_from?: string
    abilities: Ability[]
    created_at: string
    updated_at: string
  }
type Props = {
    pokemons?: Pokemon[]
    start?: number
    limit?: number
    total?: number
  }

export default function Pokemons({ pokemons, start, limit, total }: Props) {
    console.log(pokemons)
    const [currentStart, setCurrentStart] = useState(start ?? 1);
    const [isLoading, setIsLoading] = useState(0)

  const handlePageChange = (newStart: number) => {
    setIsLoading(1)
    // Simulate page change without using Inertia router
    setTimeout(() => {
      setCurrentStart(newStart)
      setIsLoading(0)
    }, 500)

    // In a real app with Inertia, you would use:
    // router.visit(`/pokemons?start=${newStart}&limit=${limit}`, {
    //   preserveState: true,
    //   onSuccess: () => setIsLoading(false),
    //   onError: () => setIsLoading(false),
    // });
  }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pokemons" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${isLoading ? "opacity-50" : ""}`}>
                        {pokemons && pokemons.length > 0 ? (
                            pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
                        ) : (
                            <div className="col-span-full text-center py-12">
                            <p className="text-muted-foreground">No Pokémon found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            
        {/* <div className="mt-4">
          <PokemonPagination start={currentStart} limit={limit} total={total} onPageChange={handlePageChange} />
        </div> */}
        </AppLayout>
    );
}

