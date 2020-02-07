const mongoose = require('mongoose')
// const { dbAPI } = require('./variables')
const dbAPI = 
const connectToDb = () => {
  mongoose
    .connect(dbAPI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))
  global.db = mongoose.connection
}

module.exports = connectToDb
