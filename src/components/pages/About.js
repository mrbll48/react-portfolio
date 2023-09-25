import MailToBtn from "../EmailBtn";
import meeee from "../../images/meeee.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="p-3 text-white aboutMe">
        <img
          src={meeee}
          className="meee"
          style={{ width: 200, height: 200 }}
          alt="me"
        ></img>
        <h1>About Me</h1>
        <p>
          About Me Hello there! I'm William Marks, a passionate and creative web
          developer with a love for crafting engaging and user-friendly digital
          experiences. I've spent 6 months immersed in the world of web
          development, honing my skills and embracing the ever-evolving nature
          of technology. I believe that the web is a canvas for limitless
          possibilities, and I'm dedicated to turning ideas into beautifully
          functional websites and web applications. My journey began by learning
          the basics of HTML and CSS, but I quickly found myself delving into
          JavaScript and beyond. Whether it's crafting responsive layouts,
          optimizing performance, or bringing interactivity to life, I thrive on
          the challenges that each project presents. What sets me apart is my
          commitment to understanding the unique goals of each project. I
          approach every task with a blend of technical expertise and creative
          thinking, ensuring that the final product not only meets the
          functional requirements but also resonates with users on a visual and
          emotional level. Collaboration is at the heart of my process. I enjoy
          working closely with designers, content creators, and clients to bring
          ideas to fruition. By fostering open communication and maintaining a
          keen eye for detail, I aim to exceed expectations and deliver
          solutions that make a lasting impact. When I'm not immersed in lines
          of code, you'll find me exploring new design trends, experimenting
          with emerging technologies, and seeking inspiration from a variety of
          sources. I believe that continuous learning is essential in this
          fast-paced field, and I'm always excited to push my boundaries and
          stay ahead of the curve. Feel free to explore my portfolio to see some
          of my recent projects. From sleek landing pages to dynamic web
          applications, each piece represents my dedication to creating
          functional, aesthetically pleasing, and user-centric digital
          experiences. I'm excited about the potential of every new project and
          the opportunity to collaborate with fellow creators. If you're looking
          to bring your web ideas to life, I'd love to be a part of your
          journey. Let's work together to turn your vision into a reality! Feel
          free to reach out at
          {
            <MailToBtn
              label=" william.marks87@gmail.com "
              mailto="william.marks87@gmail.com"
            />
          }
          for inquiries, collaborations, or just to say hello. Cheers, William
        </p>
      </div>
    </section>
  );
}
