require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')

const storeRoutes = require('./routes/storeRoutes')


const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

app.use('/store',storeRoutes)

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to MongoDB!');
    app.listen(port,(error)=>{
        if (error) throw error;
        console.log(`Server is running on port ${port}`);
    })
}).catch((error)=>{
    console.log(error);
})
