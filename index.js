const app = require('./src/app');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const PORT = process.env.PORT || 5001;

// Load env. variables
dotenv.config({ path: './src/config/config.env'});

// Connect to database
connectDB();

app.listen(
  PORT,
  console.log(
    `Tabs Service is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
