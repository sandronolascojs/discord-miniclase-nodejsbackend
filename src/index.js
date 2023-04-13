import express from 'express'
import 'dotenv/config'
import { connectDB } from './db/index.js'
import productRouter from './routes/product.routes.js'
import userRouter from './routes/user.routes.js'

const app = express()
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})

app.use(express.json())
app.use('/api', productRouter)
app.use('/api', userRouter)
