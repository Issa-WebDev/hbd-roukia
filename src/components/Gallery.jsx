import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = Array.from({ length: 9 }, (_, i) => {
  return `/images/${i}.jpg`;
});
console.log(images);
const Gallery = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[400px] mt-24 pb-6">
      <h2 className="pb-4 text-2xl font-bold text-gray-700 px-10">
        👇🏻Tu fesais quoi même😂
      </h2>
      <motion.img
        key={index}
        src={images[index]}
        alt={`Image ${index + 1}`}
        className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      />

      <button
        className="absolute top-1/2 left-2 p-2 bg-black text-white rounded-full"
        onClick={prevImage}
      >
        <FaArrowLeft size={20} />
      </button>

      <button
        className="absolute top-1/2 right-2 p-2 bg-black text-white rounded-full"
        onClick={nextImage}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Gallery;
