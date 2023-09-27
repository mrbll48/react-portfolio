export default function Resume() {
  return (
    <div className="p-3 text-white mx-auto width: 200px">
      <p>Front End Proficiencies</p>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Nodejs</li>
        <li>React</li>
        <li>Express</li>
        <li>Node</li>
      </ul>
      <p>Back End Proficiencies</p>
      <ul>
        <li>MYSQL</li>
        <li>NoSQL</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
      </ul>
      <a
        href="https://docs.google.com/document/d/1U5NDiTm6PUk1YYPyATPn_3-UyQVDcognvWl_D0k3wdY/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <p className="text-white mx-auto">Download my resume</p>
      </a>
    </div>
  );
}
