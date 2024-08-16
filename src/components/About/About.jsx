import React from 'react'
import './style.css'

function About() {
  return (
    <div className="w-full h-screen box-border pt-[7%]">
      <div className="about_heading">
        <div className='hiEmoji'>👋</div>HELLO,
      </div>
      <div className='about_content'>
        i'm a Web Developer
        <br />
        <br />
        Scroll down to see my work and if you find it interesting 
        <br />
        let’s connect 🚀
      </div>
    </div>
  );
}

export default About
