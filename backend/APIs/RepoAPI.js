import exp from 'express';
import { createRepoController } from '../controllers/repoControllers/create.controller.js';
import { getReposController} from '../controllers/repoControllers/getRepos.controller.js';
import { getReposByIdController } from '../controllers/repoControllers/getRepoById.controller.js';
import { updateRepositoryById } from '../controllers/repoControllers/update.controller.js';


export const repoApp = exp.Router()

// route for creating a repository
repoApp.post('/repo',createRepoController)

// route for getting all repositories
repoApp.get('/repo',getReposController)

// route for getting a repository by id
repoApp.get('/repo/:id', getReposByIdController)

// update a repository by id
repoApp.put('/repo/:id',updateRepositoryById)

