import { model, Schema} from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: [String]
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true,
    versionKey: false,
})

export const Product = model('Product', productSchema)