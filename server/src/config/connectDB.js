import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch(err) {
        console.log(`Some error occured while connecting to the database: ${err}`);
        process.exit(1);
    }
}

export default connectDB;