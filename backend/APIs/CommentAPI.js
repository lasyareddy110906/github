import exp from 'express';
import { addComment } from '../controllers/commentControllers/add.controller.js';

import { verifyToken } from '../middleware/verifyToken.js';

const commentApp = exp();
commentApp.use(verifyToken);

commentApp.post('/add-comment', addComment);
/*
commentApp.get('/comments/:fileId', getCommentsController);
commentApp.delete('/comments/:commentId', deleteCommentController);
*/

export { commentApp };