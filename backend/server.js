import express from 'express';
import productRoutes from'./routes/productRoutes.js'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';

const app=express();
dotenv.config();
connectDB()

app.use('/api/products',productRoutes);
app.use(errorHandler);

app.listen(5927,console.log('server is running on port 5927'));