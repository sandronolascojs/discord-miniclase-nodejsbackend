import { Product } from '../db/index.js'

export class ProductManager {
    model = null

    constructor() {
        this.model = Product
    }

    async create({ name, description, price, category, image, stock, code }) {
        const product = new this.model({
            name,
            description,
            price,
            category,
            image,
            stock,
            code,
        })
        await product.save()
        return product
    }

    async getAll ({limit, ofset}) {
        if (!limit) limit = 10
        if (!ofset) ofset = 0
        const products = await this.model.find().skip(ofset).limit(limit)
        return products
    }

    async getById (id) {
        const product = await this.model.findById(id)
        if (!product) return null
        return product
    }

    async deleteById (id) {
        await this.model.findByIdAndDelete(id)
    }

    async findByCode(code) {
        const product = await this.model.findOne({ code })
        if (!product) return null
        return product
    }

    async sortedProduct (category, limit, sort) {
        const products = await this.model.find()
        const filteredProducts = products.filter(product => product.category === category)
        const sortedProducts = filteredProducts.slice(0, limit)
        return sortedProducts
    }
}

export const productManager = new ProductManager()