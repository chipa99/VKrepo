import { Message } from "~~/server/models/message.model";
import mongoose from "mongoose";
import { User } from '~~/server/models/user.model'

export default defineEventHandler(async (event) => {
    try {
        const { you, other } = getQuery(event);
        // console.log(you, other)
        await mongoose.connect("mongodb://localhost:27017/vk");
        const messages = await Message.find({$or: [{sender: you, receiver: other}, {receiver: you, sender: other}]});
        // console.log(messages)
        const otherName = await User.findById(other);
        return {messages, otherName: otherName.fullname}
    } 
    catch (error) {
     console.log(error);
        
    }
});
