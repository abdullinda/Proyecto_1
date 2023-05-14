const http = require('http');
const url = require('url');
const Projects = require('./Projects');
const pageGenerator = require('./pageGenerator');
const { default: Projects } = require('../data/Projects');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/') {
    const html = pageGenerator.generatePage('Mi página de inicio', '<p>Bienvenidos a mi página de inicio</p>');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (path === '/Projects') {
    const html = pageGenerator.generateListProjects(Projects);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (path.startsWith('/Projects/')) {
    const ProjectsId = path.substring(10);
    const Projects = Projects.find(p => p._id === ProjectsId);

    if (!Projects) {
      const html = pageGenerator.generatePage('Projects no encontrado', '<p>Lo siento, el Projects o no fue encontrado</p>');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(html);
    } else if (path.endsWith('/edit')) {
      const html = pageGenerator.generateEditProjectsForm(Projects);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else if (path.endsWith('/delete')) {
      const html = pageGenerator.generateDeleteProjects(Projects);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      const html = pageGenerator.generateProjectsDetail(Projects);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }
  } else if (path === '/Projects/nuevo') {
    const html = pageGenerator.generateNewProjectsForm();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else {
    const html = pageGenerator.generatePage('Página no encontrada', '<p>Lo siento, la página no fue encontrada</p>');
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(html);
  }
});

server.listen(2222, () => {
  console.log('Servidor en ejecución en el puerto 2222');
});
