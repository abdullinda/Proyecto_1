import express from 'express';

import * as ProjectsController from '../controllers/Projects.controller.js';

const router = express.Router();

router.get('/Projects', ProjectsController.getAllProjects);
router.get('/Projects/:id', ProjectsController.getProjectsById);
router.post('/Projects', ProjectsController.createProjects);
router.put('/Projects/:id', ProjectsController.updateProjects);
router.delete('/Projects/:id', ProjetsController.deleteProjects);

export default router;
