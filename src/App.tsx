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
    <div className="w-screen h-screen bg-black/90 flex items-center justify-center relative">
      {/* Background Audio */}
      <audio ref={audioRef} src="/homesound.m4a" loop />
   {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div> */}
      {/* Welcome Screen */}
      {!showHome ? (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 0.1, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-white text-4xl md:text-6xl font-bold main_text text-center"
        >
         <h1 className="text-white text-4xl md:text-[120px] font-bold main_text">Ekemuku</h1> 
          <span className="text-gray-500 side_text text-[60px]">Do not talk about it</span>
        </motion.div>
      ) : (
        // Home Page
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full flex flex-col items-center justify-center text-white text-3xl"
        >
          
           <video src="/HomeVideo.mp4" className="absolute top-0 left-0 w-full h-full object-contain" autoPlay loop></video>
          <div className="relative z-30">
          <h1 className="text-5xl font-bold main_text">Welcome to the Game</h1>
          <p className="mt-4 text-lg side_text">Get ready for the adventure!</p>
          <button className="mt-6 px-6 py-3 p_text bg-blue-600 hover:bg-blue-700 rounded-lg">
            Start Game
          </button></div>
        </motion.div>
      )}
    </div>
  );
}

export default App
