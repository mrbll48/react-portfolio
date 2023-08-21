import MailToBtn from "./EmailBtn";

export default function Footer() {
  return (
    <div className="p-3 mb-2 bg-secondary text-white navbar fixed-bottom">
      <ul className="navbar-nav list-group list-group-horizontal footerUl mx-auto">
        <li className="nav-item active footerLink">
          <a href="https://www.github.com/mrbll48">
            <img src="github.png" className="footerImg" />
          </a>
        </li>
        <li className="nav-item active footerLink">
          <a href="https://www.linkedin.com/in/williammarks87/">
            <img src="linkedin.png" className="footerImg" />
          </a>
        </li>
        {/* <li>
          {
            <MailToBtn
              label="Write me an E-Mail"
              mailto="william.marks87@gmail.com"
            />
          }
        </li> */}
      </ul>
    </div>
  );
}
