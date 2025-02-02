import './App.css'
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";


function App() {
  const [showHome, setShowHome] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Play background audio
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Adjust volume if needed
      audioRef.current.play().catch(() => console.log("Autoplay blocked"));
    }

    // Transition to home page after 3 seconds
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center relative">
      {/* Background Audio */}
      <audio ref={audioRef} src="/audio/game-intro.mp3" loop />

      {/* Welcome Screen */}
      {!showHome ? (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 0.1, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-white text-4xl md:text-6xl font-bold"
        >
          Ekemuku <span className="text-red-500">(Do not talk about it)</span>
        </motion.div>
      ) : (
        // Home Page
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full flex flex-col items-center justify-center text-white text-3xl"
        >
          <h1 className="text-5xl font-bold">Welcome to the Game</h1>
          <p className="mt-4 text-lg">Get ready for the adventure!</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Start Game
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default App
