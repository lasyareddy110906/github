import exp from 'express';
import { addCollabController } from '../controllers/collabControllers/add.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { getCollaborators } from '../controllers/collabControllers/listAll.controller.js';
import { updateRoleCollaborators } from '../controllers/collabControllers/update.controller.js';
import { removeCollaborators } from '../controllers/collabControllers/remove.contoller.js';
export const collabApp = exp.Router()

// route for adding a collaborator to a repository
collabApp.post('/collaborator',verifyToken,addCollabController)

//route for listing all collaborators of a repository
collabApp.get('/collaborators/:repoId',verifyToken,getCollaborators)

//route for updating role of a collaborator
collabApp.put('/collaborator/:repoId/:userId',verifyToken,updateRoleCollaborators)

//route for removing a collaborator from a repository
collabApp.delete('/collaborator/:repoId/:userId',verifyToken,removeCollaborators)