require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()


// const helmet = require('helmet')
// const cors = require('cors')

// general middleware
app.use(express.json())
//app.use(cors({ origin: true, credentials: true }))

//route
app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree'] })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client', 'build', 'index.html'))
  })
} else {
  //app.get('/', (req, res) => res.send('Hello world! development builds'));
  app.get('/', (req, res) => {
    res.send('Api Running -  Dev Build')
  })
}

// port
const port = process.env.PORT || 8080

// db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log('DB CONNECTION ERROR', err))

// listener
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
)