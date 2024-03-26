import "./App.scss";
import Header from "./Components/Header/Header";
import Social from "./Components/Header/Social/Social";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

import github from "./assets/Github_white.png"
import linkedin from "./assets/LinkedIN_white.png"
import discord from "./assets/Discord_white.png"
import whatsapp from "./assets/WhatsApp_white.png"




function App() {


  return (
    <div className="App">
      <Header />


      <main>

        <div className="page" id="home">
          <Home />
        </div>


        <div className="page" id="about">
          <About />
        </div>

      <div className="social-wrapper">
      <h2 className="quick-links">Quick Links</h2>

      <div className="socials">
      <Social logo={github} title="GitHub" />
      <Social logo={linkedin} title="Linkedin" />
      <Social logo={discord} title="Discord" />
      <Social logo={whatsapp} title="WhatsApp" />
      </div>
      </div>

      <div className="page" id="projects">
        <Projects />
      </div>

      <div className="page" id="contact">
        <Contact />
      </div>
    </main>
    </div>
  );
}

export default App
