const express = require('express');
const morgan = require ('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();


//import routes
const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')


// app
const app = express();

//Database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    
}).then(()=>console.log('DB Connected..'))
.catch(err=>console.log(err))


//middleware

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())



//route middleware

app.use('/api',postRoutes);
app.use('/api',authRoutes)




//port

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})