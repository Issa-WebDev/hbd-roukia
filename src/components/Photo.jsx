import React from "react";
import MusicPlay from "./MusicPlay";

const Photo = () => {
  return (
    <div className="relative flex justify-center w-[400px]">
      <img src="/images/banner.png" alt="roukia's Photo" className="w-full" />
      <div className="absolute bg-pink-600 text-center text-white bottom-[-30%] px-10 py-6 rounded-lg">
        <h1 className="text-3xl font-bold  pb-4">
          Joyeux anniversaire, ma chérie ! 🎉❤️
        </h1>
        <MusicPlay />
      </div>
    </div>
  );
};

export default Photo;
