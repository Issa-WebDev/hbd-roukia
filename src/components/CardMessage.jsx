import { h1 } from "framer-motion/client";
import React, { useState } from "react";

const CardMessage = () => {
  const [showCard, setShowCard] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="w-[400px] pb-10">
      {showCard ? (
        <div className="w-full p-8 bg-pink-600 font-bold rounded-lg">
          <h1 className="text-xl text-white">Ton Message : 👇🏻</h1>
          <h1 className="text-center text-md mt-8 text-white">
            Fais une capture et envoie moi😂
          </h1>
          <p className="text-md border-8 border-pink-400 text-gray-700 p-8 mt-8 bg-white rounded-md italic font-semibold">
            {inputValue}
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4 p-5 bg-pink-100 rounded-lg">
          <textarea
            className="p-4 outline-0 border text-md text-gray-500 font-bold"
            rows={4}
            placeholder="Envoie moi (issa) un message😂❤️💘"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></textarea>
          <button
            onClick={() => {
              if (inputValue.trim()) {
                setShowCard(true);
              }
            }}
            className="px-6 py-2 bg-pink-600 rounded-lg cursor-pointer font-semibold text-white"
          >
            Envoyer
          </button>
        </div>
      )}
    </div>
  );
};

export default CardMessage;
