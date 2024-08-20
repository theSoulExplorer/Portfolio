import React from 'react'
import './style.css'

function Projects() {
  const projects = [
    {
      name: "Blog It Out",
      img: "blogItOut.jpeg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Blood Bank",
      img: "bloodbank.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Connect",
      img: "connect.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Jotion",
      img: "jotion.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Quill",
      img: "quill.jpeg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Weather App",
      img: "weather.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Web Chef",
      img: "webchef.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                <div className='eachProjectDiv flex flex-col justify-center items-center rounded-md p-3 shadow-[0px_0px_30px_5px_rgba(0,0,0,.1)]'>
                  <img src={`Images/${project.img}`} className='project_img rounded-md' />
                  {/* <h3>{project.name}</h3> */}
                  <p className='project_name'>{project.name}</p>
                  <p className='project_desc'>{project.desc}</p>
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
