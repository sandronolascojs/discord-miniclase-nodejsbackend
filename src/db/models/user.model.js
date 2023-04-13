import { model, Schema } from 'mongoose'

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false,
})

export const User = model('User', UserSchema)