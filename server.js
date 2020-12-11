const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');



const cors = require('cors')



const { connected } = require('process');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes/api')
const MONGODB_URI ="mongodb+srv://rahul123:12345@cluster0.1qy6g.mongodb.net/mern?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URI || 'mongodb://localhost/mern',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  
})


mongoose.connection.on('connected', ()=>{
    console.log('mongoose is connected')
})

app.use(cors()) // Use this after the variable declaration ....


app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use(morgan('tiny'));
app.use('/api',routes);




app.listen(PORT , console.log(`server is running at ${PORT}`));