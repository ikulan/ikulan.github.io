import Educations from "./sections/Educations";
import Experiences from "./sections/Experiences";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-stone-100 grid px-4 py-2 text-stone-800">
      <Landing />
      <Experiences />
      <Educations />
      <Projects />
    </div>
  );
}

export default App;
