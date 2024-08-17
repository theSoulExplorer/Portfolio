import React from 'react'
import './style.css'
import { Downarrow } from '../Svgs';

function Home() {
  return (
    <>
      <div className="section home_container h-screen w-full flex flex-col justify-between items-center overflow-hidden">
        <div className="kuchbhi border-2 border-black w-full p-2 invisible"></div>
        <div className="home_parent_name w-full h-fit">
          <div className="home_watermarkname w-full h-fit flex justify-center">
            AMAN SHARMA
          </div>
          <div className="home_name w-full h-fit flex justify-center">
            AMAN SHARMA
          </div>
        </div>
        <div className="home_scroll w-full p-2 flex justify-center items-center">
          <div
            className="h-fit w-fit cursor-pointer"
            onClick={(e) => {
              window.scrollTo(0, window.innerHeight);
            }}
          >
            <Downarrow />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
