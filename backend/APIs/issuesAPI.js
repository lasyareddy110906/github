import exp from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { createIssueController } from '../controllers/issueControllers/create.controller.js';
import { getAllIssuesController } from '../controllers/issueControllers/get.controller.js';
import { getByIdIssuesController } from '../controllers/issueControllers/getById.controller.js';
import { updateIssueController } from '../controllers/issueControllers/update.controller.js';
import { closeIssueController } from '../controllers/issueControllers/close.controller.js';
import { deleteIssueController } from '../controllers/issueControllers/delete.controller.js';

export const issuesApp = exp.Router()

// route for creating an issue
issuesApp.post('/issue', verifyToken, createIssueController)

//routes for getting all issues
issuesApp.get('/issues', verifyToken, getAllIssuesController)

//route for getting issue by id
issuesApp.get('/issue', verifyToken, getByIdIssuesController)

//route for updating an issue
issuesApp.put('/issue/:issueId', verifyToken, updateIssueController)

//route for closing an issue
issuesApp.put('/issue/:issueId/close', verifyToken, closeIssueController)

//route for deleting an issue
issuesApp.delete('/issue/:issueId', verifyToken, deleteIssueController)

//route for updating an issue
issuesApp.put('/issue/:issueId', verifyToken, updateIssueController)


//route for closing an issue
issuesApp.put('/issue/:issueId/close', verifyToken, closeIssueController)

//route for deleting an issue
issuesApp.delete('/issue/:issueId', verifyToken, deleteIssueController)
