interface CharacterInfoProps {
    character: {
      name: string
      description: string
    }
  }
  
  export function CharacterInfo({ character }: CharacterInfoProps) {
    return (
      <div className="relative h-full min-h-[500px]">
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-6 rounded-t-lg">
          <h2 className="text-yellow-400 mb-2 text-[25px] font-mono side_text">PLAYER NAME</h2>
          <h3 className="text-6xl mb-4 p_text">{character.name}</h3>
          <p className="text-yellow-400/80 text-[25px]  font-mono side_text leading-relaxed">{character.description}</p>
        </div>
      </div>
    )
  }
  
  