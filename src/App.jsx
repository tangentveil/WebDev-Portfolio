import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from './components/Skills'
import About from './components/About'
import Projects from "./components/Projects";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
    </main>
  );
};

export default App;
