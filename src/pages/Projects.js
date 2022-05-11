import { useState, useEffect } from "react";
import React from "react";
function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
 

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(()=> {
    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        console.log(data)
        setProjects(data)
    };
    getProjectsData()}, [props.URL]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project, idx) => (
      <div key={idx}>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name}/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;