import { useState, useEffect, useRef } from "react"
import backgroundVideo from "/vid2.mp4"
import backgroundMusic from "/homesound.m4a"
import { CharacterInfo } from "../components/character-info"
import { ActiveQuest } from "../components/active-quest"
import { CharacterGrid } from "../components/character-grid"
import Clock from "../components/Clock"
function Start() {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [selectedCharacter, setSelectedCharacter] = useState({
        name: "IKENGA",
        description:
            "KNOWN FOR HIS PROWESS AND SHEAR STRENGTH, IKENGA TEARS DOWN HIS ENEMIES. HIS LOW CENTR OF GRAVITY GIVES IM STABILITY. HE IS NOT FIRM WITH OTHER WEAPONS OTHER THAN THE SPEAR",
    })


    
    useEffect(() => {


        if (videoRef.current) {
            videoRef.current.play().catch(() => console.log("Video autoplay blocked"))
        }

        if (audioRef.current) {
            audioRef.current.volume = 0.5
            audioRef.current.loop = true
        }


    }, [])
    return (
        <div className="w-full h-full text-white text-3xl relative">
            <audio ref={audioRef} src={backgroundMusic} />
            <video
                ref={videoRef}
                src={backgroundVideo}
                className="absolute top-0 left-0 w-full object-cover h-full"
                autoPlay
                loop
                muted
                playsInline
            ></video>
            <div className="relative z-10 h-screen">
                <div> <nav className="flex justify-around items-center w-full p-3">
                    <div className="flex items-center  gap-2 w-full">
                        <h1 className="text-[#969696] font-semibold">PROFILE</h1>
                        <h1 className="bg-[#838383] p-1 text-white font-semibold">SELECT PLAYER</h1>
                    </div>
                    <ul className="flex justify-end gap-6 w-full mr-2">
                                                  <li className="side_text uppercase text-3xl">CREDIT</li>
                                                  <li className="side_text uppercase text-2xl text-[#959595]">SERVER TIME <span className="text-white text-3xl"><Clock format="HH:mm"/></span></li>
                                                  <li className="side_text uppercase text-2xl text-[#959595]">LOCAL TIME <span className="text-white text-3xl"><Clock format="HH:mm"/></span></li>
                  
                                              </ul>
                </nav></div>
                <div className="container mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8"><div className="lg:w-2/3">
                    <CharacterInfo character={selectedCharacter} />
                </div>

                    {/* Right Side - Character Grid */}
                    <div className="lg:w-1/3">
                        <div className="space-y-4">
                            <ActiveQuest />
                            <CharacterGrid onSelectCharacter={setSelectedCharacter} />
                        </div>
                    </div></div>

            </div>

        </div>
    )
}

export default Start