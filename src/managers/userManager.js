import { User } from '../db/index.js'

class UserManager {
    model = null
    constructor() {
        this.model = User
    }

    async create({ username, password }) {
        const user = new this.model({
            username,
            password,
        })
        await user.save()
        return user
    }

    async getByUsername(username) {
        const user = await this.model.findOne({ username })
        if (!user) return null
        return user
    }
}

export const userManager = new UserManager()