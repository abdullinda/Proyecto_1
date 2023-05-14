import React from 'react';

const Projects = ({ name, description, technologies, repositoryLink, previewImage }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Tecnologías: {technologies}</p>
      <a href={repositoryLink}>Link al repositorio</a>
      <img src={previewImage} alt={`${name} preview`} />
    </div>
  );
};

export default Projects;
