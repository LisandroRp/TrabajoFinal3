import express from 'express'
import GeneralWebController from '../../controllers/web/GeneralWebController.js'
/* const GeneralController = require('../../controllers/api/GeneralController')
const express = require('express'); */

const generalWebRouter = express.Router();

generalWebRouter.get("/", GeneralWebController.redirect)

generalWebRouter.get("/LogIn", GeneralWebController.getLogIn)

generalWebRouter.post("/LogIn", GeneralWebController.postLogIn)

generalWebRouter.post("/LogOut", GeneralWebController.postLogOut)

generalWebRouter.get("/Register", GeneralWebController.getRegister)

generalWebRouter.post("/Register", GeneralWebController.postRegister)

export {generalWebRouter};
/* module.exports = generalRouter */