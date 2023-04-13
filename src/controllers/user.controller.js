import bcrypt from 'bcrypt'
import { userManager } from '../managers/userManager.js'

export const createUser = async (request, response) => {
    try {
        const { username, password } = request.body
        
        const MIN_PASSWORD_LENGTH = 6
        const MAX_PASSWORD_LENGTH = 32
        const isValidPassword = password.length > MIN_PASSWORD_LENGTH && password.length < MAX_PASSWORD_LENGTH

        if (!isValidPassword) return response.status(400).json({ 
            message: `Password must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters`
        })

        if (!username || !password) return response.status(400).json({ message: 'Missing required fields' })

        const userAlreadyExists = await userManager.getByUsername(username)

        if (userAlreadyExists) return response.status(400).json({ message: 'Username already exists' })

        const hash = await bcrypt.hash(password, 10)

        const user = await userManager.create({ username, password: hash })

        const userToBody = {
            username: user.username,
            id: user._id,
        }

        return response.status(201).json({ user: userToBody }) 
    } catch (error) {
        return response.status(500).json({ message: error.message })
    }
}

const getUserById = async (request, response) => {
    try {
        const { id } = req.params
        const user = await userManager.getById(id)
        if (!user) return response.status(404).json({ message: 'User not found' })
        const userToBody = {
            username: user.username,
            id: user._id,
        }
        response.status(200).json({ user: userToBody })
    } catch (error) {
        
    }
}