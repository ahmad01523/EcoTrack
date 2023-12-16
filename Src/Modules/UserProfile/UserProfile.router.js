import express from 'express'
import * as userController from "./User.controller.js"
import  { auth } from '../../Middleware/auth.js';

const app = express();

app.get('/', userController.getUsers)
app.patch('/update',auth, userController.updateUser)
app.delete('/',auth, userController.deleteUser)


export default app; 