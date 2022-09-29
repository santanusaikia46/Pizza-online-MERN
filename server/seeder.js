const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/config')
const Pizza = require('./models/pizzaModel')
const Pizzas = require('./data/pizza-data')
const pizzaModel = require('./models/pizzaModel')

dotenv.config()
connectDB()

//import data
const importData = async () => {
    try {
        await pizzaModel.deleteMany()
        const sampleData = Pizzas.map(pizza => {return {...pizza}})
        await Pizza.insertMany(sampleData)
        console.log('data imported');
        process.exit()
    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}

const dataDestroy = () => {}

if (process.argv[2] === '-d') {
    dataDestroy()
} else {
    importData()
}