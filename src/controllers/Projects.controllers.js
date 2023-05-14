import * as view from '../views/Projects.views.js'
import * as service from '../services/Projects.services.js'
import Projects from '../data/Projects.js'

function getProjects(req, res) {
    service.getProjects({ deleted: true })
        .then(Projects => res.send(view.generateListProjects(Projects)))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getProjectstById(req, res) {
    const id = req.params.idProjects

    service.getProjectsById(id)
        .then(Projects => {
            if (Projects) {
                res.send(view.generateProjectsDetail(Projects))
            } else {
                res.send(view.generatePage('Projects no encontrado', `<h1>El Projects con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formCreateProjects(req, res) {
    res.send(view.generateNewProjectsForm())
}

function createProjects(req, res) {
    const { name, description, picture } = req.body
    const Projects = { name, description: parseInt(picture) }

    service.createProjects(Projects)
        .then(() => res.redirect('/Projects'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formEditProjects(req, res) {
    const id = req.params.idProjects

    service.getProjectstById(id)
        .then(Projects => {
            if (Projects) {
                res.send(view.generateEditProjectsForm(Projects))
            } else {
                res.send(view.generatePage('Projects no encontrado', `<h1>El Projects con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function editProjects(req, res) {
    const id = req.params.idProjects
    const { name, description, picture } = req.body
    const Projects = { name, description: parseInt(picture) }

    service.editProjects(id, Projects)
        .then(() => res.redirect(`/Projects/${id}`))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formDeleteProjects(req, res) {
    const id = req.params.idProjects

    service.getProjectstById(id)
        .then(Projects => {
            if (Projects) {
                res.send(view.generateDeleteProjects(product))
            } else {
                res.send(view.generatePage('Projects no encontrado', `<h1>El Projects con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function deleteProjects(req, res) {
    const id = req.params.idProjects

    service.deleteProjects(id)
        .then(() => res.redirect('/Projects'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

export {
    getProjects,
    getProjectsById,
    formCreateProjects,
    createProjects,
    formEditProjects,
    editProjects,
    formDeleteProjects,
    deleteProjects
}
