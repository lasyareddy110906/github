import exp from 'express';
import { getNotifications } from '../controllers/notificationControllers/get.controller.js';
import { readNotifications } from '../controllers/notificationControllers/read.controller.js';
import { deleteNotification } from '../controllers/notificationControllers/delete.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
export const notificationApp = exp.Router()

// route for getting notifications of a user
notificationApp.get('/notifications',verifyToken,getNotifications)

// route for marking notifications as read
notificationApp.post('/notifications/mark-read',verifyToken,readNotifications)

// routes for deleting notifications
notificationApp.delete('/notifications/:id', verifyToken, deleteNotification)