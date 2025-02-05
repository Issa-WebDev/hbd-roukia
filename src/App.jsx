import React from "react";
import Banner from "./components/banner";
import Celebration from "./components/Celebration";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-20 px-10">
        <Celebration />
        <Banner />
        <Gallery />
      </section>
    </>
  );
};

export default App;
