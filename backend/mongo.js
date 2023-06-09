require('dotenv').config();
const mongoose = require('mongoose');

const connection_string = process.env.ATLAS_URI;

mongoose.connect(connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log('MongoDB connection failed:', error);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collection = mongoose.model("users", newSchema);

module.exports = collection;