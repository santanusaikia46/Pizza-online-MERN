const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const url = process.env.URL
        const conn = await mongoose.connect(url)
        console.log('connection successful');
    } catch (e) {
        console.log('connection failed');
    }
}

module.exports = connectDB;