import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(error){
        console.error(`Error: ${error.message}`);
        // exit(1) means the connection exits with failure
        process.exit(1);
    }
}

export default connectDB;