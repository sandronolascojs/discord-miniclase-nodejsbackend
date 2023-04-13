import { Cart } from '../db/index.js'

class CartManager {
    model = null 
    constructor() {
        this.model = Cart
    }

    async create({ userId, products }) {
        const cart = new this.model({
            userId,
            products,
            total
        })

        await cart.save()
        return cart
    }

    async getCartByUserId(userId) {
        const cart = await this.model.findOne({ userId })
    }
}