import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
function App() {

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
      </Routes>

    </div>
  )
}

export default App

