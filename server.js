require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')

const storeRoutes = require('./routes/storeRoutes')
const planRoutes = require('./routes/planRoutes')
const calculateRoutes = require('./routes/calculateRoutes')


const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

app.use('/store',storeRoutes)
app.use('/plan',planRoutes)
app.use('/calculate',calculateRoutes)

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
