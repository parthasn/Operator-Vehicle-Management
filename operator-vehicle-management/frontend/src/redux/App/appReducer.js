import { SET_VEHICLE_DATA, SET_TRIP_DATA } from './actionType';


let initState = {
    vehicleData: [],
    tripData: []
   
};

const appReducer = (state = initState, { type, payload }) => {
    switch (type) {
        
        case SET_VEHICLE_DATA:
            return {
                ...state,
                vehicleData: payload
            };
        case SET_TRIP_DATA:
            return {
                ...state,
                tripData: payload
            };

        default:
            return state;
    }
};

export default appReducer;