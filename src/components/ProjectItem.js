import React from "react";


function ProjectItem({ name, about, technologies}) {
  console.log(name)
  const techie= technologies.map((tech)=>{

    return (<span key={tech}>{tech}</span>)

  })


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techie}
      </div>
    </div>
  );
}

export default ProjectItem;
