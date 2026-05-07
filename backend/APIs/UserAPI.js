import exp from 'express';
import { getUsers } from '../controllers/userControllers/search.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

export const userApp = exp.Router()

// route for searching users
userApp.get('/users',verifyToken,getUsers)