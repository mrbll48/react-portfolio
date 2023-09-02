import React from "react";
import Project, { WaistWatchers } from "../Projects/WaistWatchers";
import projects from "../data/Projects.json";
import { MessengerApp } from "../Projects/MessengerApp";
import { FitTracker } from "../Projects/FitTracker";

export default function Portfolio() {
  return (
    <section id="projects" className="p-3 text-white">
      <div>
        <h2>My Portfolio</h2>
        <p>View my projects below!</p>
      </div>
      <div id="projectCards">
        <WaistWatchers />
        <MessengerApp />
        <FitTracker />
      </div>
    </section>
  );
}
