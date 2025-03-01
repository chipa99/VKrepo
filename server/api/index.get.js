import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";
// import {object}
export default defineEventHandler(async (event) => {
    try {
        const { except } = getQuery(event)
        await mongoose.connect("mongodb://localhost:27017/vk");
        const user = await User.findById(except)
        const users = await User.find({ "_id": { $ne: user._id } });
        const data = users.map(({ _id, fullname }) => {
            return { _id, fullname }
        })
        return data
    } catch (e) {
        console.error(e);
    }
});
