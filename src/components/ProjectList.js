import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">

        <ProjectItem name={projects[0].name} about={projects[0].about} technologies={projects[0].technologies} key={projects[0].id}/>
        <ProjectItem name={projects[1].name} about={projects[1].about} technologies={projects[1].technologies} key={projects[1].id}/>
        <ProjectItem name={projects[2].name} about={projects[2].about} technologies={projects[2].technologies} key={projects[2].id}/>


      </div>
    </div>
  );
}

export default ProjectList;
