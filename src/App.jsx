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
import { useEffect } from "react";




function App() {
useEffect(() => {
  const navLinks = document.querySelectorAll("nav ul li")
  const indicator = document.querySelector("nav .indicator")
  const profile = document.querySelector(".profile")

  const pages = document.querySelectorAll(".page")

  function handleScroll(){
    let homeBottom = pages[0].getBoundingClientRect().bottom;
    let homeHeight = pages[0].offsetHeight;

    if(homeBottom < homeHeight / 2){
      profile.classList.add("active");
    }else {
      profile.classList.remove("active");
    }
    for(let i = 0; i < pages.length; i++){
      let currentPage = pages[i]

      let pageTop = currentPage.getBoundingClientRect().top;

      if(pageTop < 300){
        navLinks.forEach(link =>{
          link.classList.remove("active");        
        });

        navLinks[i].classList.add("active")

        let width = navLinks[i].offsetWidth,
            left = navLinks[i].offsetLeft;

        indicator.style.width = `${width + 28}px`
        indicator.style.left = left + "px"
      }
    } 
  }

  handleScroll()
  window.addEventListener("scroll",handleScroll);
},[])



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
