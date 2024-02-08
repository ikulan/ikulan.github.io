import Education from "./education";
import Experience from "./experience";
import Landing from "./landing";
import Projects from "./projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-background grid justify-center p-4 text-stone-800">
        <Landing />
        <Experience />
        <Education />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
