import MailToBtn from "./EmailBtn";

export default function Footer() {
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <ul>
        <li>
          <a href="https://www.github.com/mrbll48">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/williammarks87/">Linkedin</a>
        </li>
        <li>
          {
            <MailToBtn
              label="Write me an E-Mail"
              mailto="william.marks87@gmail.com"
            />
          }
        </li>
      </ul>
    </div>
  );
}
