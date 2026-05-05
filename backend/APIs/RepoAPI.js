import exp from 'express';
import { createRepository } from '../controllers/repoControllers/create.controller.js';
import { getRepositoriesController } from '../controllers/repoControllers/getRepositories.controller.js';

export const repoApp = exp.Router()

// route for creating a repository
repoApp.post('/repo',createRepository)

// route for getting all repositories
repoApp.get('/repo',getRepositoriesController)

// route for updating a repository
