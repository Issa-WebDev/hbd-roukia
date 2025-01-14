import React from "react";

const Gallery = () => {
  const images = [
    "public/images/img1.jpg",
    "public/images/img2.jpg",
    "public/images/img3.jpg",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 my-10">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Memory ${index + 1}`}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      ))}
    </div>
  );
};

export default Gallery;
