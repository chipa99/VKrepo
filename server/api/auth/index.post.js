import { User } from '~~/server/models/user.model';
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const { fullname, password, mixed } = await readBody(event);
    // console.log(fullname, password, mixed)
    await mongoose.connect("mongodb://localhost:27017/vk");
    if (!fullname) {
        let data = await User.findOne({ phone: mixed })

        if (!data) {
            data = await User.findOne({ mail: mixed })
        }
        if(data) {
            if (data.password == password) {
                return data
            }
        } 
    } else {
      
        if (mixed.startsWith('+7') || mixed.startsWith('8')) {
            const user = new User({ fullname, password, phone: mixed, mail: null });
            // console.log('tvar')
            await user.save();
            return user
        } else {
            const user = new User({ fullname, password, mail: mixed, phone: null })
            // console.log('debil')
            await user.save();
            return user
        }
     
    }
});
