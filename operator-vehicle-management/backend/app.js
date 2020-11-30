const express = require('express')
const vehicles = require('./vehicles')
const trips = require('./trips')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const Vehicle = require('./models/Vehicle')
const Trip = require('./models/Trip')
const vehicleRoute = require('./routes/vehicleRoutes')
const authRoute = require('./routes/authRoutes');
const tripRoute = require('./routes/tripRoutes')

mongoose.connect('mongodb://localhost/vehicleManagementOp', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
    if(err){
        console.log("Connection to database failed")
    }
    
    if(Vehicle.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            // It's empty
            Vehicle.insertMany(vehicles).then(()=>{ 
            console.log("Vehicle Data inserted")  // Success 
        }).catch((error)=>{ 
            console.log(error)      // Failure 
        }); 
        }
    }));
    if(Trip.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            // It's empty
            Trip.insertMany(trips).then(()=>{ 
            console.log("Trip Data inserted")  // Success 
        }).catch((error)=>{ 
            console.log(error)      // Failure 
        }); 
        }
    }));
})

app.use('/api', vehicleRoute)
app.use('/api', tripRoute)
app.use('/api/admin', authRoute);

app.listen(8000, () => {
    console.log("The server is up and running on port 8000")
})