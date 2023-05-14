import express from 'express'

import * as controller from '../controllers/Projects.controllers.js'

const router = express.Router()

router.get('/Projects', controller.getProjects)

router.get('/Projects/nuevo', controller.formCreateProjects)
router.post('/Projects/nuevo', controller.crearProjects)

router.get('/Projects/:idProjects/editar', controller.formEditarProjects)
router.post('/Projects/:idProjects/editar', controller.editarProjects)

router.get('/Projects/:idProjects/eliminar', controller.formEliminarProjects)
router.post('/Projects/:idProjects/eliminar', controller.eliminarProjects)

router.get('/Projects/:idProjects', controller.getProjectsPorId)

export default router
