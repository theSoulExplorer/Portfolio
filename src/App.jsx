import { useEffect } from "react"
import { About, Home, Menu, Skills } from "./components"

function App() {

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      const secs = document.getElementsByClassName('section');
      const menu = document.getElementsByClassName("menuItem");
      const skillInnerContainer = document.getElementsByClassName("skillInnerContainer")[0];
      const skillOuterContainer = document.getElementsByClassName("skillOuterContainer")[0];
      const skillContent = document.getElementsByClassName("skill_content")[0];

      let ind = secs.length;
      for(let i=0;i<secs.length;i++){
        let sec = secs[i];
        let offset = sec.getBoundingClientRect().y;
        if(offset - window.innerHeight/4 > 0){
          ind = i;
          break;
        }
      }
      ind--;
      for(let i=0;i<menu.length;i++)  menu[i].classList.remove("active");
      menu[ind].classList.add("active");


      const skills = document.getElementsByClassName("eachSkillDiv");
      // const ww = skillContent.offsetWidth;
      // console.log("1",skillInnerContainer.getBoundingClientRect().y);
      // console.log("2",skillOuterContainer.getBoundingClientRect().y);
      // let diff = skillInnerContainer.getBoundingClientRect().y - skillOuterContainer.getBoundingClientRect().y;
      // let perc = 100*diff/(2*window.innerHeight);
      // let perValue = perc.toFixed(3);
      // console.log(perValue,"%");
      // 8% -> 50%
      // 100% -> -50%
      // let val = (window.innerWidth/2) - ((ww*perValue)/100);
      // skillContent.style.left = `${val}px`;

      let offsetSkill = skillOuterContainer.getBoundingClientRect().y;
      let tot = window.innerHeight - skillOuterContainer.offsetHeight;
      
      let perc = (offsetSkill/tot)*100;
      perc = perc.toFixed(3);
      perc = Math.min(100,perc);
      perc = Math.max(0, perc);
      skillContent.style.transform = `translateX(-${perc}%)`;

      for(let i=0;i<skills.length;i++){
        let skill = skills[i];
        let xx = skill.getBoundingClientRect().x + skill.offsetWidth/2;
        let mid = window.innerWidth/2;
        let diff = Math.abs(mid - xx);
        let xPerc = 100 - (100*diff)/mid;
        xPerc = xPerc.toFixed(3);
        xPerc = Math.min(100, xPerc);
        xPerc = Math.max(60, xPerc);
        skill.style.transform = `scale(${xPerc/100})`;
        skill.style.filter = `grayscale(${100-xPerc}%)`;
      }
    });
  },[]);

  return (
    <>
      <Menu />
      <Home />
      <About />
      <Skills />
    </>
  )
}

export default App
