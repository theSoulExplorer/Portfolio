import React, { useState } from 'react'
import './style.css'

function Footer() {
  const [name,setName] = useState("");
  const [msg,setMsg] = useState("");
  const handleSubmit = () => {
    const subject = "Hi from "+name;
    const mailtoLink = `mailto:aman10201sharma@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailtoLink;

    setName("");
    setMsg("");
    return;
  }
  return (
    <div className="section w-full h-screen box-border pt-[7%]">
      <div className="footer_heading">
        <div className="handShakeEmoji">🤝</div>Let's Connect
      </div>
      <div className="footer_content w-full flex flex-col justify-center items-center">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[60%] h-[40px] mt-5 mb-5 pl-2 shadow-[0_0_15px_2px_rgba(0,0,0,.1)] rounded-md placeholder:font-[200] placeholder:text-[1rem] outline-none"
        />
        <textarea
          placeholder="Type your Message here ..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-[60%] min-h-[120px] max-h-[120px] text-[13px] overflow-hidden mb-5 pl-2 pt-2 shadow-[0_0_15px_2px_rgba(0,0,0,.1)] rounded-md placeholder:font-[200] placeholder:text-[1rem] outline-none"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[60%] h-[40px] bg-black text-white mt-10 mb-5 rounded-md"
        >
          Send Message
        </button>
      </div>
      <div className="footer_links w-full h-fit pb-8 mt-8 flex justify-center items-center">
        <div className="w-[80%] rounded-md shadow-[0_0_10px_2px_rgba(0,0,0,.1)] flex justify-around p-3 text-sm font-semibold tracking-wider">
          <a target='_blank' href="https://www.linkedin.com/in/aman-sharma-92b00322a/">LinkedIn</a>
          <a target='_blank' href="https://github.com/theSoulExplorer">Github</a>
          <a target='_blank' href="https://drive.google.com/file/d/13j2EPeXdi6p2s4uJVYzvkmfabQ_mfJef/view?usp=sharing">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Footer
