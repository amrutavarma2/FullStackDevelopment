require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./Routes/workouts');
const mongoose = require('mongoose');
 
//express app
const app = express();

//middleware
app.use(express.json()); //to parse json data from the request body

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
// app.get('/', (req, res) => {
//     res.json({ msg: 'Welcome to my app' });
// })
//no need to write the above code as we have created a route for it in the workouts.js file
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
    app.listen(process.env.PORT, () => {    
    console.log('connected to DB & listening for requests on port', process.env.PORT  );
    });
    })
    .catch((err) => {
        console.log(err);
    });
