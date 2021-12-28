import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

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
        <img src="assets/anemoto.png" alt="" />
      </div>
      </div>
     <div className="right">
       <div className="wrapper">
         <h2>Hi there, I'm</h2>
         <h1>Arisa Nemoto</h1>
         <h3>Freelance <span ref={textRef}></span></h3>
       </div>
        <a href="#portfolio">
         <img src="assets/blackallow.png" alt="" />
        </a>
     </div>
    </div>
  )
}
