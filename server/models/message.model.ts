import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    message: String,
    receiver: String,
    sender: String,
    date: Date
});

export const Message = model("Message", MessageSchema); 