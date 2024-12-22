import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div> 
  );
}

export default App;
