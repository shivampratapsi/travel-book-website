import express from 'express';
import {postUserRegister,postUserLogin, postIsUserAuthenticated, postuserLogout} from '../Controllers/AuthController.js';
import userauth from '../middleware/userAuth.js';
const authRouter = express.Router();

authRouter.post("/register",postUserRegister);
authRouter.post("/login",postUserLogin);
authRouter.post('/isUserAuthenticated',userauth,postIsUserAuthenticated);
authRouter.post('/logout',postuserLogout);
export default authRouter;