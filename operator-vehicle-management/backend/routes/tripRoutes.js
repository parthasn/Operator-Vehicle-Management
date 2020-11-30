const express = require('express')
const router = express.Router()

const { getTrips, getTrip, deleteTrip, editTrip } = require('../controllers/trip-controller')

router.get('/getTrips', getTrips)
router.get('/trip/:id', getTrip)
router.delete('/trip/:id', deleteTrip)
router.post('/trip/update/:id', editTrip)

module.exports = router