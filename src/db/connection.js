const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost/tasksdb`);    
        console.log('Database connected !!! ');
    } catch (error) {
        console.error('There was an error connecting Database : ', error);
    }
    
}

module.exports = {connectDB};