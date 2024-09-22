import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
// import Feedback from "./components/Feedbacks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import StarCanvas from "./components/canvas/Stars";
import './index.css';

const App = () =>{
  return(
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Feedback /> */}

        <div className="relative z-0">
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;