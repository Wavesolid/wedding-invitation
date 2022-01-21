import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useNewUrlParser: true
        });
        console.log('connected');
        return handler(req, res);
    } catch(err)
    {
        console.log('not connected');
    }
};

export default connectDB;