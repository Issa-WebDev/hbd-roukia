import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AnimatedText = () => {
  return (
    <div className="text-center text-2xl font-bold text-pink-600 my-10">
      <Typewriter
        words={[
          "Joyeux anniversaire à ma belle ! 💖",
          "Merci d’être dans ma vie ❤️",
          "Tu es mon bonheur 🎉",
        ]}
        loop={true}
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={2000}
      />
    </div>
  );
};

export default AnimatedText;
