export default function Resume() {
  return (
    <div className="p-3 bg-secondary text-white vh-100">
      <a href="../../../Assets/WMarks-Resume.pdf" download>
        <p>Download my resume</p>
      </a>
      <p>Front End Proficiencies</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Nodejs</li>
        <li>React</li>
      </ul>
      <p>Back End Proficiencies</p>
      <ul>
        <li>MYSQL</li>
        <li>NoSQL</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
