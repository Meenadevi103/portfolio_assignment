import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import reactLogo from "./assets/react.jpg";
import viteLogo from "./assets/vite.jpg";
import { Skills } from "./components/Skills/Skills";
// import { Experience } from "./components/Experience/Experience";
function App() {
  return (
    <div className={styles.App}>
      {/* Example usage */}
      <img src={reactLogo} alt="React Logo" width={100} />
      <img src={viteLogo} alt="Vite Logo" width={100} />

      <Navbar />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;