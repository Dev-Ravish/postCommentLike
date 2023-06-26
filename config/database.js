const mongoose = require('mongoose');
require('dotenv').config();


const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(
        console.log('SUCCESSFULLY connected to the database.')
    ).catch(err =>{
        console.log('Error while connecting to database');
        console.log(err.message);
    });
};

module.exports = dbConnect;