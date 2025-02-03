import "./App.css";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import LoadVideo from "/vid.mp4";

function App() {
  const [showHome, setShowHome] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Play background audio
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => console.log("Autoplay blocked"));
    }

    // Ensure video starts playing
    if (videoRef.current) {
      videoRef.current.play().catch(() => console.log("Video autoplay blocked"));
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
      {/* <audio ref={audioRef} src="/homesound.m4a" loop /> */}

      {/* Welcome Screen */}
      {!showHome ? (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 0.1, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-white text-4xl md:text-6xl font-bold main_text text-center"
        >
          <h1 className="text-white text-4xl md:text-[120px] font-bold main_text">
            Ekemuku
          </h1>
          <span className="text-gray-500 side_text text-[60px]">
            Do not talk about it
          </span>
        </motion.div>
      ) : (
        // Home Page
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full  text-white text-3xl relative"
        >
          {/* Background Video */}
          <video
            ref={videoRef}
            src={LoadVideo}
            className="absolute top-0 left-0 w-full object-cover h-full "
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* Content Overlay */}
          <div className="relative z-10 ">
            <nav className="flex justify-end items-end w-full p-2 ">
              <ul className="flex justify-end gap-6 w-full mr-2">
                <li className="side_text uppercase text-3xl">CREDIT</li>
                <li className="side_text uppercase text-2xl text-[#959595]">SERVER TIME <span className="text-white text-3xl">9 : 45</span></li>
                <li className="side_text uppercase text-2xl text-[#959595]">LOCAL TIME <span className="text-white text-3xl">12 : 30</span></li>

              </ul>
            </nav>
            <div className="flex  justify-end items-start w-full p-2 mr-2 ">
              <div className="bg-[#edc639] absolute right-52 flex justify-end items-end h-[300px] w-3.5"></div>
              <div>
                <div>
                  <div>
                    <h1 className="bg-[#edc639] w-full side_text px-2">Active Quest</h1>
                    <p className="text-[16px] p-2 bg-[#3838372f]">ALLICANCE</p>
                  </div>

                  <div>
                    <h1> Quest Name</h1>
                    <p>EKUMEKU</p>
                  </div>

                  <div>
                    <h5>MISSION</h5>
                    <p className="text-[14.5px] w-40">
                      LEAD AND CONOUER
                      THE BRITISH NIGERIAN
                      FORCES FROM
                      STEPPING INTO ALA
                      IGBO
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
