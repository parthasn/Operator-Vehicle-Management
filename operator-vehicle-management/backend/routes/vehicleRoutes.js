const express = require('express')
const router = express.Router()

const { getVehicles, getVehicle, deleteVehicle, editVehicle } = require('../controllers/vehicle-controller')

router.get('/getVehicles', getVehicles)
router.get('/vehicle/:id', getVehicle)
router.delete('/vehicle/:id', deleteVehicle)
router.post('/vehicle/update/:id', editVehicle)

module.exports = router