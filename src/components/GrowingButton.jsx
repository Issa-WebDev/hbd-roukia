import { useState } from "react";

function GrowingButton() {
  const [size, setSize] = useState(3);
  const [showAudio, setShowAudio] = useState(false);

  const handleClick = () => {
    if (size < 5) {
      setSize(size + 5);
    } else {
      setShowAudio(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {showAudio ? (
        <div className="flex flex-col gap-4 transition-all duration-500">
          <h1 className="text-lg font-bold text-center text-pink-600">
            Mon message pour toi 👇🏻
          </h1>
          <audio src="/audio/me.opus" controls></audio>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-bold text-center text-pink-600">
            Double click sur le coeur👇🏻
          </h1>
          <button
            onClick={handleClick}
            style={{ fontSize: `${size}rem` }}
            className="text-white cursor-pointer font-bold rounded-lg"
          >
            ❤️
          </button>
        </div>
      )}
    </div>
  );
}

export default GrowingButton;
