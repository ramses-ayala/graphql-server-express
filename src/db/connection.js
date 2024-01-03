const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);    
        console.log('Database connected !!! ');
    } catch (error) {
        console.error('There was an error connecting Database : ', error);
    }
    
}

module.exports = {connectDB};