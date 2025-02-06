import CardMessage from "./components/CardMessage";
import Celebration from "./components/Celebration";
import Gallery from "./components/Gallery";
import GrowingButton from "./components/GrowingButton";
import Photo from "./components/Photo";

const App = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-20 px-10">
        <Celebration />
        <Photo />
        <Gallery />
        <GrowingButton />
        <CardMessage />
      </section>
    </>
  );
};

export default App;
