import { productManager } from '../managers/productManager.js'

export const createProduct = async (request, response) => {
    try {
        const { name, description, price, category, image, stock, code } = request.body
    
        if (!name || !price || !category || !stock || !code) return response.status(400).json({ message: 'Missing required fields' })

        const productAlreadyExists = await productManager.findByCode(code)

        if (productAlreadyExists) return response.status(400).json({ message: 'Product code already exists' })

        const product = await productManager.create({ name, description, price, category, image, stock, code })

        response.status(201).json({ product })
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}


export const getAllProducts = async (request, response) => {
    try {
        const { category, limit, status } = request.query
        if (category) {
            let products = await productManager.getAll()
            
            if (status) {
                const filteredProducts = products.filter(product => product.category === category)
                products = filteredProducts.filter(product => product.status === true)
                if (limit) {
                    products = products.slice(0, limit)
                    return response.status(200).json(products)
                }
                return response.status(200).json(products)
            }
            
            products = products.filter(product => product.category === category)
            if (limit) {
                const filteredProducts = products.filter(product => product.category === category)
                const sortedProducts = filteredProducts.slice(0, limit)
                return response.status(200).json(products)
            }
        }

        const products = await productManager.getAll()
        response.status(200).json(products)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

export const getProductById = async (request, response) => {
    try {
        const { id } = request.params
        const product = await productManager.getById(id)
        if (!product) return response.status(404).json({ message: 'Product not found' })
        response.status(200).json(product)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}