const Trip = require('../models/Trip')

const getTrips = (req, res) => {
    const query = req.query.vehicleRegistrationNumber
    Trip.find()
    .then((trips) => {
        trips = trips.filter((item) => {
        if(item.vehicleRegistrationNumber === query){
            return item
        }
        
    })
    res.json(trips)
}
    
    )
    .catch((err) => res.status(400).json("Error: " + err))
}

const getTrip = (req, res) => {
    Trip.findById(req.params.id)
    .then((trip) => res.json(trip))
    .catch((err) => res.status(400).json("Error: " + err))
}

  const deleteTrip = (req, res) => {
    Trip.findByIdAndDelete(req.params.id)
      .then(() => res.json("Trip Deleted Successfully from database"))
      .catch((err) => res.status(400).json("Error: " + err));
}

const editTrip = (req, res) => {
    Trip.findById(req.params.id)
      .then((trip) => {
        trip.from = req.body.from;
        trip.to = req.body.to;
        trip.filledCapacity = req.body.filledCapacity
        
        trip
          .save()
          .then(() => res.json("trip updated Successfully"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
}

module.exports = { getTrips, getTrip, deleteTrip, editTrip }