import { SET_VEHICLE_DATA, SET_TRIP_DATA } from './actionType';

export const setVehicleData = (payload) => ({
    type: SET_VEHICLE_DATA,
    payload
});

export const setTripData = (payload) => ({
    type: SET_TRIP_DATA,
    payload
});

