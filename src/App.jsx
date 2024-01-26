import Educations from "./sections/Educations";
import Experiences from "./sections/Experiences";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <div className="grid bg-stone-100 p-4 text-stone-800">
        <Landing />
        <Experiences />
        <Educations />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
