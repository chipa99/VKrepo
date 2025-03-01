import { Message } from "~~/server/models/message.model";
import mongoose from "mongoose";
// import { User } from '~~/server/models/user.model'

export default defineEventHandler(async (event) => {
    try {
        await mongoose.connect("mongodb://localhost:27017/vk");
        const body = await readBody(event);
        const message = new Message(body);
        await message.save();
        const messages = await Message.find({});
        return  messages
    } 
    catch (error) {
     console.log(error);
    }
});