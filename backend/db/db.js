const mongoose = require('mongoose');

function connectDB() {
  // Ensure the environment variable DB_CONNECT is defined
  mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));
}

module.exports = connectDB;