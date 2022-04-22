import "./contact.scss";
import { FaLinkedin } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { AiFillGithub } from "react-icons/ai"

export default function Contact() {



  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="contact-details">
        <div className="linkedin">
        < FiMail/>
        <h4>ardolce@gmail.com</h4>
        </div>
          <div className="linkedin">
        < FaLinkedin/>
        <h4><a href="https://www.linkedin.com/in/arisa-nemoto-533751188/">Linkedin</a></h4>
        </div>
        <div className="linkedin">
        < AiFillGithub />
        <h4><a href="https://github.com/Allllisha">Github</a></h4>
        </div>
        </div>
      </div>
    </div>
  );
}