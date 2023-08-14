import React from "react";
import Project from "../Project";
import projects from "../data/Projects.json";

export default function Portfolio() {
  return (
    <section id="projects" className="p-3 mb-2 bg-secondary text-white">
      <div>
        <h2>My Portfolio</h2>
        <p>View my projects below!</p>
      </div>
      <div id="projectCards">
        {projects.map((project) => (
          <Project data={project} />
        ))}
      </div>
    </section>
  );
}
