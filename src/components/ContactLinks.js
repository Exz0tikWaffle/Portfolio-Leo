import githubLogo from "../images/github.png";
import linkedLogo from "../images/linked.png";
import './ContactLinks.css'

function ContactLinks() {
    return ( 
    <div className='contact-links'>
    <a href="https://github.com/Exz0tikWaffle/" target="_blank">
    <img
      src={githubLogo}
      height={35}
      width={35}
      className="contact-link"
      alt=''
    ></img>
  </a>
  <a
    href="https://www.linkedin.com/in/leo-tremblay/"
    target="_blank"
  >
    <img
      src={linkedLogo}
      height={35}
      width={35}
      className="contact-link"
      alt=''
    ></img>
  </a>
    </div> );
}

export default ContactLinks;