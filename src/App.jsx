import Celebration from "./components/Celebration";
import Gallery from "./components/Gallery";
import Photo from "./components/Photo";

const App = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-20 px-10">
        <Celebration />
        <Photo />
        <Gallery />
      </section>
    </>
  );
};

export default App;
