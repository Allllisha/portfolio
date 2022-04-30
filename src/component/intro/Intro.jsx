import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import image from "./anemoto1.jpg"
import allow from "./blackallow.png"

export default function Intro() {
   const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay:  1500,
      backSpeed:  60,
      strings: ["Developer", "Violinist", "Musician"],
     });
  },[]);

  return (
    <div className ="intro" id = "intro">
      <div className="left">
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
      </div>
     <div className="right">
       <div className="wrapper">
         <h2>Hi there, I'm</h2>
         <h1>Arisa Nemoto</h1>
         <h3>Freelance <span ref={textRef}></span></h3>
       </div>
        <a href="#portfolio">
         <img src={allow} alt="" />
        </a>
     </div>
    </div>
  )
}
