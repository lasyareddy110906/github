import exp from 'express';
import { createRepoController } from '../controllers/repoControllers/create.controller.js';
import { getReposController} from '../controllers/repoControllers/getRepos.controller.js';
import { getReposByIdController } from '../controllers/repoControllers/getRepoById.controller.js';
import { updateRepoByIdController } from '../controllers/repoControllers/update.controller.js';
import { deleteRepoByIdController } from '../controllers/repoControllers/delete.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';


export const repoApp = exp.Router()

// route for creating a repository
repoApp.post('/repo',verifyToken,createRepoController)

// route for getting all repositories
repoApp.get('/repo',getReposController)

// route for getting a repository by id
repoApp.get('/repo/:id', getReposByIdController)

// update a repository by id
repoApp.put('/repo/:id',updateRepoByIdController)

// delete a repository by id
repoApp.delete('/repo/:id',deleteRepoByIdController)

