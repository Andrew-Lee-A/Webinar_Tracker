require('dotenv').config()
require('express-async-errors')
const express = require('express')
const {spawn} = require('child_process');
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const helmet = require('helmet')
const cors = require('cors')
const webinar = require('./models/webinar');

// const articleRouter = require('./routes/article')
// const authRouter = require('./routes/authentication')
// const userInfoRouter = require('./routes/userInfo')

// general middleware
app.use(express.json())
app.use(helmet())
app.use(cors({ origin: true, credentials: true }))

// mongoose and mongo sandbiox routes
app.get('/add-webinar', (req, res) => {
  const webinar1 = new webinar({
    title: 'Intro to OOP part 2',
    cpd_hours: 1
  });

  webinar1.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    })

})

app.get('/all-webinar', (req, res) => {
  webinar.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/single-webinar', (req, res) => {
  webinar.findById('62c316becb82dda1a3336e02')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    })
})
//route
app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree'] })
})

app.get('/', (req, res) => {
 
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['script2.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
    });
    
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
  .then(() => {
    console.log("DB CONNECTED");
    const server = app.listen(port, () =>
      console.log(`Server is running on port ${port}`)
    );
  })
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// listener
// const server = app.listen(port, () =>
//   console.log(`Server is running on port ${port}`)
// )
