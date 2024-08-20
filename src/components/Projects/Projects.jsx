import React from 'react'
import './style.css'

function Projects() {
  const projects = [
    {
      name: "Blog It Out",
      img: "blogItOut.jpeg",
    },
    {
      name: "Blood Bank",
      img: "bloodbank.jpg",
    },
    {
      name: "Connect",
      img: "connect.png",
    },
    {
      name: "Jotion",
      img: "jotion.png",
    },
    {
      name: "Quill",
      img: "quill.jpeg",
    },
    {
      name: "Weather App",
      img: "weather.png",
    },
    {
      name: "Web Chef",
      img: "webchef.png",
    },
  ];
  return (
    <div className="section projectOuterContainer w-full h-[550vh] box-border pt-[7%]">
      <div className="projectInnerContainer w-full h-screen bg-white sticky overflow-x-hidden box-border">
        <div className="project_heading box-border">
          <div className="brainBurstEmoji">🤯</div>PROJECTS
        </div>
        <div className="project_content w-fit h-fit flex box-border">
          {
            projects.map((project) => {
              return (
                <div className='eachProjectDiv flex flex-col justify-center items-center flex-shrink-0 rounded-md p-3 shadow-[0px_0px_30px_5px_rgba(0,0,0,.1)]'>
                  <img src={`Images/${project.img}`} className='project_img rounded-md' />
                  {/* <h3>{project.name}</h3> */}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Projects
