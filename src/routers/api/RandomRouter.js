import express from 'express'
import RandomController from '../../controllers/api/RandomController.js'

const randomRouter = express.Router();

randomRouter.get("/", RandomController.getRandom)

export {randomRouter};