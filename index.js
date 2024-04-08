const express = require('express')
require('dotenv').config({
    path: './.env'
})
const dbConfig = require('./config/dbConfig')
const userRoute=require('./Routes/userRoute')
app.use(express.json())
app.use('/',userRoute)

const app = express()
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server started at ${port}`);
})