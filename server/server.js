const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/config')
const morgan = require('morgan')

//config dotnev
dotenv.config()

//connection mongoose
connectDB()

const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//route
app.use('/api/pizzas', require('./routes/pizzaRoute'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/orders', require('./routes/orderRoute'));
app.get('/', (req, res) => {
    res.send('hello world')
})

//listen
const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`server is running on ${process.env.NODE_ENV} mode on ${process.env.PORT}`);
})