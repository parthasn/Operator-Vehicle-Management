const Vehicle = require('../models/Vehicle')

const getVehicles = async (req, res) => {
    const sortBy = req.query.sortBy;
    // let sortCriteria = req.query.sortCriteria;
    let filterBy = '';
    if (req.query.filterBy){
        filterBy = req.query.filterBy;
    }
    console.log(sortBy, filterBy);
    Vehicle.find()
        .then((vehicles) => {
            //first task is filter
            if (filterBy !== '') {
                vehicles = vehicles.filter((item) => {
                    // console.log(item.type);
                    if (item.type === filterBy) {
                        return item;
                    }
                });
            }
            //sort the filtered data
            vehicles.sort((a,b) => {
                //console.log(sortCriteria)
                if(sortBy === "asc"){
                    
                    return a.capacity - b.capacity
                }
                else if(sortBy === "desc"){
                    return b.capacity - a.capacity
                    
                }
                
            })
            res.json(vehicles);
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

const getVehicle = (req, res) => {
    Vehicle.findById(req.params.id)
    .then((vehicle) => res.json(vehicle))
    .catch((err) => res.status(400).json("Error: " + err))
}

  const deleteVehicle = (req, res) => {
    Vehicle.findByIdAndDelete(req.params.id)
      .then(() => res.json("Vehicle Deleted Successfully from database"))
      .catch((err) => res.status(400).json("Error: " + err));
}

const editVehicle = (req, res) => {
    Vehicle.findById(req.params.id)
      .then((vehicle) => {
        vehicle.type = req.body.type;
        vehicle.image = req.body.image;
        vehicle.registrationNumber = req.body.registrationNumber;
        vehicle.capacity = req.body.capacity;
        
        vehicle
          .save()
          .then(() => res.json("Vehicle updated Successfully"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
}

module.exports = { getVehicles, getVehicle, deleteVehicle, editVehicle }