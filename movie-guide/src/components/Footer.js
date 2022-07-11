import './footer.css'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

function Footer() {
  return(
    <footer>
      <p>Created by Gabriel Celligoi</p>
      <a href='https://github.com/gabrielcelligoi' target="_blank"><AiFillGithub /></a>
      <a href='https://www.linkedin.com/in/gabrielcelligoi/' target="_blank"><AiFillLinkedin /></a>
    </footer>
  )
}

export default Footer;