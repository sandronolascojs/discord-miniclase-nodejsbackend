import { Router } from 'express'
import { createProduct, getAllProducts } from '../controllers/product.controller.js'

const productRouter = Router()

productRouter.post('/products', createProduct)
productRouter.get('/products', getAllProducts)

export default productRouter