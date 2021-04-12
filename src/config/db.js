const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://sehat_guide:3Gt8mCZ8FhfnWgME@cluster0-c73fg.mongodb.net/abstract_dev_test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  console.log(`Tabs Service is Connected to MongoDB on this Host: ${conn.connection.host}`);
};

module.exports = connectDB; 
