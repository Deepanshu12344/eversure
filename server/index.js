import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/product.js'

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(cors());
app.use('/api',productRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    app.listen(PORT,(request, response)=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((err)=>{
    console.log(err);
})

