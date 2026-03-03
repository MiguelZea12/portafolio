import './App.css';
import './styles/utilities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
