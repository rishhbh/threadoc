import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    refreshToken: {
        type: String,
        select: false
    }
},
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);