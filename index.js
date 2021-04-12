const app = require('./src/app');

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(
    `Tabs Service is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
