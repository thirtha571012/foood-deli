import mongoose from "mongoose"

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://greatstack:KOELTIRTHA5710120304@cluster0.rskjtxf.mongodb.net/foood-deli').then(()=>console.log("DB connected"));
}
