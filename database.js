import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

