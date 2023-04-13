import { Router } from 'express'
import { createUser } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.get('/users')
userRouter.post('/users', createUser)

export default userRouter