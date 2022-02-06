const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDb");
}).catch((e) => { console.log("Error while connecting to db"); console.log(e);});s