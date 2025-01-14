import React from "react";
import ConfettiAnimation from "./components/ConfettiAnimation";
import BirthdayMessage from "./components/BirthdayMessage";
import Gallery from "./components/Gallery";
import MusicPlayer from "./components/MusicPlayer";
import CustomCard from "./components/CustomCard";
import AnimatedText from "./components/AnimatedText";
import Quiz from "./components/Quiz";
import Countdown from "./components/Countdown";
import FireworksComponent from "./components/Fireworks";

function App() {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center justify-center">
      <ConfettiAnimation />
      <BirthdayMessage />
      <Gallery />
      <MusicPlayer />
      <CustomCard />
      <AnimatedText />
      <Quiz />
      <FireworksComponent />
      <Countdown />
    </div>
  );
}

export default App;
