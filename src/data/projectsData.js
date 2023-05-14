import React from 'react';
import projectsData from './projectsData.js';
import Project from './Projects.js';

const ProjectsSection = ({ section }) => {
  // Filtrar los proyectos por sección
  const projectsInSection = projectsData.filter(project => project.section === section);

  return (
    <div>
      <h1>{section} Projects</h1>
      {projectsInSection.map(project => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          repositoryLink={project.repositoryLink}
          previewImage={project.previewImage}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;
