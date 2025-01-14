import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <audio ref={audioRef} src="/audio/birthday-music.mp3"></audio>
      <button
        onClick={togglePlay}
        className="p-4 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
