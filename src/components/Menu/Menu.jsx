import React from 'react'
import './style.css'
import { Achievements, Contact, Home, Projects, Skills } from '../Svgs'

function Menu() {
  return (
    <div className='h-fit w-full menuMainDiv fixed top-[5%] flex justify-center items-center'>
      <div className="menuDiv rounded-lg flex justify-between items-center pl-2 pr-2 pt-1 pb-1 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
        <div className="menuItem active">
          <Home />
        </div>
        <div className="menuItem">
          <Skills />
        </div>
        <div className="menuItem">
          <Projects />
        </div>
        <div className="menuItem">
          <Achievements />
        </div>
        <div className="menuItem">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Menu
