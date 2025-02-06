import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlay = () => {
  const [isplaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (isplaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsplaying((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center">
      <audio src="\audio\birthday-music.mp3" ref={audioRef}></audio>
      <button
        onClick={() => handlePlay()}
        className="p-4 mt-4 rounded-full bg-white cursor-pointer text-gray-500"
      >
        {isplaying ? <FaPause size={25} /> : <FaPlay size={25} />}
      </button>
    </div>
  );
};

export default MusicPlay;
