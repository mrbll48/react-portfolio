import MailToBtn from "./EmailBtn";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

export default function Footer() {
  return (
    <div className="p-3 bg-dark text-white navbar fixed-bottom">
      <ul className="navbar-nav list-group list-group-horizontal footerUl mx-auto">
        <li className="nav-item active footerLink">
          <a href="https://www.github.com/mrbll48">
            <img src={github} className="footerImg" alt="github" />
          </a>
        </li>
        <li className="nav-item active footerLink">
          <a href="https://www.linkedin.com/in/williammarks87/">
            <img src={linkedin} className="footerImg" alt="linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
}
