import exp from 'express';
import { registerController } from '../controllers/authControllers/register.controller.js';
import { loginController } from '../controllers/authControllers/login.controller.js';
import { deleteController } from '../controllers/authControllers/delete.controller.js';

export const authApp = exp.Router()

// route for register
authApp.post('/register',registerController)

// route for login
// authApp.post('/login',loginController)

// route for logout
// authApp.get('/logout',)

// route for viewing profile
// authApp.get('/profile',)

// route for updating profile
// authApp.put('/profile',)

// route for changing password
// authApp.post("/password",)

// route for deleting account
// authApp.delete("/delete",deleteController) 
