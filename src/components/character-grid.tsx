interface Character {
    name: string
    description: string
  }
  
  interface CharacterGridProps {
    onSelectCharacter: (character: Character) => void
  }
  
  export function CharacterGrid({ onSelectCharacter }: CharacterGridProps) {
    const characters = Array(12).fill({
      name: "IKENGA",
      description:
        "KNOWN FOR HIS PROWESS AND SHEAR STRENGTH, IKENGA TEARS DOWN HIS ENEMIES. HIS LOW CENTR OF GRAVITY GIVES IM STABILITY. HE IS NOT FIRM WITH OTHER WEAPONS OTHER THAN THE SPEAR",
    })
  
    return (
      <div className="bg-black/80 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg">FILTER & SORT</h2>
          <div className="flex gap-2 text-sm">
            <span>Filter:</span>
            <span>Favourites</span>
            <span>Sort:</span>
            <span>Date Earned ↓</span>
          </div>
        </div>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {characters.map((character, index) => (
            <button
              key={index}
              onClick={() => onSelectCharacter(character)}
              className="relative aspect-square bg-gray-800/50 hover:bg-gray-700/50 transition-colors rounded overflow-hidden group"
            >
              {index < 8 && (
                <>
                  <img
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Character ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-yellow-400">★</span>
                  </div>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  