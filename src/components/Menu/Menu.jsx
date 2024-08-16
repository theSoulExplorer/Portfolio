import React from 'react'
import './style.css'
import { Achievements, Contact, Home, Projects, Skills } from '../Svgs'

function Menu() {
  return (
    <div className="menuDiv fixed top-[5%] left-[50%] translate-x-[-50%] rounded-lg flex justify-between items-center pl-2 pr-2 pt-1 pb-1 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
      <div>
        <Home />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Achievements />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Menu
