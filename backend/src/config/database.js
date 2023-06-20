
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
        'mongodb+srv://officialhussain14:qoaYPEJz81nQqJ20@mypirioject.blerhv8.mongodb.net/apiStore?retryWrites=true&w=majority',
         {
             useNewUrlParser: true,
             useUnifiedTopology: true,
         });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

module.exports = connectToDatabase;


