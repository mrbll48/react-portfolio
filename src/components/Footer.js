import BtnMailTo from "./EmailBtn";

export default function Footer() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.github.com/mrbll48">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/williammarks87/">Linkedin</a>
        </li>
        <li>
          {
            <BtnMailTo
              label="Write me an E-Mail"
              mailto="william.marks87@gmail.com"
            />
          }
        </li>
      </ul>
    </div>
  );
}
