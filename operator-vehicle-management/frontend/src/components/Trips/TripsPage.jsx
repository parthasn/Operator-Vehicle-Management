import React, { useEffect, useState } from 'react'
import TripCard from './TripCard'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setTripData } from '../../redux/App/action';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    divContainer: {
        margin: "20px",
    }
  }));

export default function TripsPage(props){
    const {registrationNumber} = props
    console.log("props",props)
    const classes = useStyles();
    const dispatch = useDispatch()
    const tripData = useSelector((state) => state.app.tripData) || [];

    useEffect(() => {
        window.scrollTo(0, 0);
        axios({
            method: 'get',
            url: `http://localhost:8000/api/getTrips?vehicleRegistrationNumber=${props.match.params.id}`
        })
            .then((res) => dispatch(setTripData(res.data)))
            // .then((res) => console.log("tripData",res.data))
            .catch((err) => console.log(err));
    }, [dispatch]);
    console.log("tripData",tripData)
    // const pollingData = pollingStationData[0].pollingStations
    return (
        <div>
            {
                tripData && tripData.map((item, id)  => (
                    <div key = {id} className = {classes.divContainer}>
                            <TripCard data = {item}/>
                    </div>
                ))
            }
        </div>
    )
}