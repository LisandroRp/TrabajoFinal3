import express from 'express'
import GeneralWebController from '../../controllers/web/GeneralWebController.js'
/* import upload from '../../middleware/MulterMiddleware.js'
import {auth} from '../../middleware/AuthMiddleware.js' */
/* const GeneralController = require('../../controllers/api/GeneralController')
const express = require('express'); */

const generalWebRouter = express.Router();

generalWebRouter.get("/", GeneralWebController.redirect)

generalWebRouter.get("/login", GeneralWebController.getLogIn)

/* generalWebRouter.post("/LogIn", GeneralWebController.postLogIn)

generalWebRouter.post("/LogOut", GeneralWebController.postLogOut)

generalWebRouter.get("/Register", GeneralWebController.getRegister)

generalWebRouter.post("/Register", upload.single("avatar"), GeneralWebController.postRegister)

generalWebRouter.get("/Profile", auth, GeneralWebController.getProfile) */

export {generalWebRouter};
/* module.exports = generalRouter */