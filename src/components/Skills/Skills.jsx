import React from 'react'
import "./style.css"
import { Cpp, Css, Express, Git, Html, Javascript, Mongodb, Mysql, Nextjs, Nodejs, Reactjs, TailwindCSS, Typescript } from '../Svgs';

function Skills() {
  return (
    <div className="section skillOuterContainer w-full h-[450vh] box-border pt-[7%]">
      <div className="skillInnerContainer w-full h-screen bg-white sticky top-[7%] overflow-x-hidden box-border">
        <div className="skill_heading box-border">
          <div className="brainEmoji">🧠</div>SKILLS
        </div>
        <div className="skill_content w-fit flex box-border">
          <div className="eachSkillDiv">
            <Html />
          </div>
          <div className="eachSkillDiv">
            <Css />
          </div>
          <div className="eachSkillDiv">
            <Javascript />
          </div>
          <div className="eachSkillDiv">
            <Mongodb />
          </div>
          <div className="eachSkillDiv">
            <Git />
          </div>
          <div className="eachSkillDiv">
            <Cpp />
          </div>
          <div className="eachSkillDiv">
            <Express />
          </div>

          <div className="eachSkillDiv">
            <TailwindCSS />
          </div>
          <div className="eachSkillDiv">
            <Mysql />
          </div>
          <div className="eachSkillDiv">
            <Reactjs />
          </div>
          <div className="eachSkillDiv">
            <Nextjs />
          </div>
          <div className="eachSkillDiv">
            <Nodejs />
          </div>
          <div className="eachSkillDiv">
            <Typescript />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
