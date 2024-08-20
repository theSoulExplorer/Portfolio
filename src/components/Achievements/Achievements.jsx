import React from 'react'
import './style.css'

function Achievements() {
  return (
    <div className=" section w-full h-[80vh] box-border achievement_container">
      <div className="achievement_heading">
        <div className="trophyEmoji">🏆</div>ACHIEVEMENTS
      </div>
      <div className="achievement_content">
        <li>ACM ICPC REGIONALIST 80/85 rank 💪</li>
        <li>KNIGHT on leetcode 🐴</li>
        <li>SPECIALIST on codeforces 🤓</li>
        <li>3* on codechef 🌟</li>
      </div>
    </div>
  );
}

export default Achievements
