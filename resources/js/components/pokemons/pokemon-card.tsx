"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

// Type definitions
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

// Type color mapping
const typeColors: Record<string, string> = {
  Normal: "bg-stone-200 text-stone-800",
  Fire: "bg-orange-500 text-white",
  Water: "bg-blue-500 text-white",
  Electric: "bg-yellow-400 text-yellow-900",
  Grass: "bg-green-500 text-white",
  Ice: "bg-cyan-300 text-cyan-900",
  Fighting: "bg-red-700 text-white",
  Poison: "bg-purple-600 text-white",
  Ground: "bg-amber-700 text-white",
  Flying: "bg-indigo-300 text-indigo-900",
  Psychic: "bg-pink-500 text-white",
  Bug: "bg-lime-500 text-white",
  Rock: "bg-stone-600 text-white",
  Ghost: "bg-violet-700 text-white",
  Dragon: "bg-violet-500 text-white",
  Dark: "bg-stone-800 text-white",
  Steel: "bg-slate-400 text-slate-900",
  Fairy: "bg-pink-300 text-pink-900",
}

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const [showDetails, setShowDetails] = useState(false)

  // Capitalize first letter of name
  const displayName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

  // Format height and weight
  const formattedHeight = `${pokemon.height.toFixed(1)}m`
  const formattedWeight = `${pokemon.weight.toFixed(1)}kg`

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="relative p-0">
        <div className="absolute top-2 right-2 z-10">
          {pokemon.legendary && (
            <Badge variant="secondary" className="bg-amber-300 text-amber-900 border-amber-400">
              Legendary
            </Badge>
          )}
        </div>
        <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <img
            src={`/${pokemon.sprite}`}
            alt={`${displayName} sprite`}
            className="h-40 w-40 object-contain"
            // onError={(e) => {
            //   e.currentTarget.src = "/placeholder.svg?height=160&width=160"
            // }}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl">{displayName}</CardTitle>
          <div className="flex gap-1">
            {pokemon.types.map((type) => (
              <Badge key={type} className={typeColors[type] || "bg-gray-500 text-white"}>
                {type}
              </Badge>
            ))}
          </div>
        </div>
        <CardDescription className="line-clamp-2 h-10">{pokemon.description}</CardDescription>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">HP</span>
            <div className="flex items-center gap-2 flex-1 ml-4">
              <Progress value={pokemon.hp / 2} className="h-2" />
              <span className="text-sm tabular-nums w-8">{pokemon.hp}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">ATK</span>
            <div className="flex items-center gap-2 flex-1 ml-4">
              <Progress value={pokemon.attack / 2} className="h-2" />
              <span className="text-sm tabular-nums w-8">{pokemon.attack}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">DEF</span>
            <div className="flex items-center gap-2 flex-1 ml-4">
              <Progress value={pokemon.defense / 2} className="h-2" />
              <span className="text-sm tabular-nums w-8">{pokemon.defense}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">SPD</span>
            <div className="flex items-center gap-2 flex-1 ml-4">
              <Progress value={pokemon.speed / 2} className="h-2" />
              <span className="text-sm tabular-nums w-8">{pokemon.speed}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col p-0">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full py-2 px-4 flex items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-colors"
        >
          {showDetails ? (
            <>
              Hide details <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show details <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>

        {showDetails && (
          <div className="p-4 pt-0 space-y-4 bg-muted/20">
            <Separator className="my-2" />

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Height</span>
                <p className="font-medium">{formattedHeight}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Weight</span>
                <p className="font-medium">{formattedWeight}</p>
              </div>
            </div>

            {pokemon.evolves_from && (
              <div>
                <span className="text-sm text-muted-foreground">Evolves from</span>
                <p className="font-medium capitalize">{pokemon.evolves_from}</p>
              </div>
            )}

            {pokemon.abilities.length > 0 && (
              <div>
                <span className="text-sm text-muted-foreground">Abilities</span>
                <div className="mt-1 space-y-2">
                  {pokemon.abilities.map((ability) => (
                    <div key={ability.name} className="bg-background rounded p-2">
                      <div className="font-medium capitalize">{ability.name}</div>
                      <p className="text-xs text-muted-foreground">{ability.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

