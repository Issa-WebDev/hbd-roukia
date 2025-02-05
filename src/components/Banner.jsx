import PlayMusic from "./playMusic";

const Banner = () => {
  return (
    <div className="relative flex justify-center w-[400px]">
      <img src="/images/banner.png" alt="roukia's Photo" className="w-full" />
      <div className="absolute bg-pink-200 text-center text-gray-700 bottom-[-30%] px-10 py-6 rounded-lg">
        <h1 className="text-3xl font-bold  pb-4">
          Joyeux anniversaire, ma chérie ! 🎉❤️
        </h1>
        <PlayMusic />
      </div>
    </div>
  );
};

export default Banner;
