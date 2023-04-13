import mongoose from 'mongoose'

const URL_CONNECTION = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce'

export const connectDB = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}