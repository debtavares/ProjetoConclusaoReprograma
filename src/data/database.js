require('dotenv').config()
const mongoose = require('mongoose')

const mongoUrl = process.env.MONGO_URI

const connect = () => {mongoose.connect(
  mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }
