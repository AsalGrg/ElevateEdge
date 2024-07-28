import React from "react";
import SecondaryButton from "../../button/SecondaryButton";
import ProjectHighlight from "./ProjectHighlight";
import AllProjects from "./AllProjects";
import './projects.css'

const Projects = () => {
  return (
    <section className="container px-3 d-flex flex-column justify-content-between projectContainer my-5 py-5">
      <ProjectHighlight />
      <AllProjects/>
    </section>
  );
};

export default Projects;
