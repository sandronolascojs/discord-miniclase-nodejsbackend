import { model, Schema } from 'mongoose'

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    ],
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false,
})

export const Cart = model('Cart', cartSchema)