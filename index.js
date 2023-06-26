const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const dbConnect = require('./config/database');

const PORT = process.env.PORT || 8000;
const app = express();


const blogRoute = require('./routes/blog');
app.use(bodyParser.json());
app.use('/api', blogRoute);


app.listen(PORT, ()=>{
    console.log(`App is listening to the port ${PORT}`);
});
dbConnect();