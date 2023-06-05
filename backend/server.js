import express from 'express';
import productRoutes from'./routes/productRoutes.js'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'

const app=express();
dotenv.config();
connectDB()

app.use(express.json())
app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.get('/api/config/paypal', (req,res)=>res.send(process.env.PAYPAL_CLIENT_ID))
app.use(errorHandler);

app.listen(5927,console.log('server is running on port 5927'));