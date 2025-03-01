import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    mail: {
        required: false,
        type: String,
        unique: false
    },
    password: String,
    fullname: String,
    phone: {
        required: false,
        type: String,
        unique: false
    },
});

export const User = model("User", UserSchema);