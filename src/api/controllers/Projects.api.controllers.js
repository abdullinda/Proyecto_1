import Projects from '../../data/Projects.js';
import * as ProjectsService from '../services/Projects.service.js';

async function getAllProjects(req, res) {
  try {
    const Projects = await ProjectsService.getAllProjects();
    res.json(Projects);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error al obtener los projects' });
  }
}

async function createProjects(req, res) {
  const { name, description, picture } = req.body;
  try {
    const Projects= await ProjectsService.createProjects({ name, description, picture});
    res.status(201).json(Projects);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error al crear el projects' });
  }
}

async function getProjectsById(req, res) {
  const ProjectsId = req.params.ProjectsId;
  try {
    const Projects = await ProjectsService.getProjectsById(ProjectsId);
    if (!Projects) {
      res.status(404).send({ error: 'Projects no encontrado' });
    } else {
      res.json(Projects);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error al obtener el Projects' });
  }
}

async function updateProjects(req, res) {
  const ProjectsId = req.params.ProjectsId;
  const { name, description, picture } = req.body;
  try {
    const updatedProjects= await ProjectsService.updateProjects(ProjectsId, { name, description, picture });
    if (!updatedProjects) {
      res.status(404).send({ error: 'Projects no encontrado' });
    } else {
      res.json(updatedProjects);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error al actualizar el Projects' });
  }
}

async function deleteProjects(req, res) {
  const ProjectsId = req.params.ProjectsId;
  try {
    const deletedProjects = await ProjectsService.deleteProjects(ProjectsId);
    if (!deletedProjects) {
      res.status(404).send({ error: 'Projects no encontrado' });
    } else {
      res.json(deletedProjects);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error al eliminar el Projects' });
  }
}

export { getAllProjects, createProjects, getProjectsById, updateProjects, deleteProjects };
