import React, { useEffect, useState } from 'react';
import VehicleCard from './VehicleCard';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setVehicleData } from '../../redux/App/action';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    divContainer: {
        margin: '20px',
        width: '800px'
    },
    paper: {
        height: '500px',
        margin: '20px',
        textAlign: 'center'
    },
    formControl: {
        margin: theme.spacing(1),
        width: 200,
        textAlign: 'left'
    },
    button: {
        margin: "20px"
    },
    cont: {
        textAlign: "center"
    }
}));

export default function LandingPage() {
    const classes = useStyles();
    const history = useHistory();

    const [ query, setQuery ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ suggestions, setSuggestions ] = useState([]);
    const [ type, setType ] = useState('');
    const [ sort, setSort ] = useState('null');
    const [ activePage, setActivePage ] = useState(1)
    const [ perPage ] = useState(5)
    

    const vehicleData = useSelector((state) => state.app.vehicleData) || [];
    const dispatch = useDispatch();

    console.log('vehicleData in navbar', vehicleData);

    useEffect(
        () => {
            window.scrollTo(0, 0);
            axios({
                method: 'get',
                url: `http://localhost:8000/api/getVehicles?sortBy=${sort}&filterBy=${type}`
            })
                //  .then((res) => console.log("result",res.data))
                .then((res) => dispatch(setVehicleData(res.data)))
                .catch((err) => console.log(err));
        },
        [ sort, type ]
    );

    useEffect(
        () => {
            if (query === '') {
                setSuggestions([]);
            } else {
                let out = vehicleData
                    .filter((item) => (item.registrationNumber.toLowerCase().indexOf(query) !== -1 ? true : false))
                    .map((item) => item.registrationNumber);
                console.log(out);
                setSuggestions(out);
            }
            setLoading(false);
        },
        [ query ]
    );

    const handleClick = (registrationNumber) => {
        history.push(`/trips/${registrationNumber}`);
    };

    const handleFilter = (e) => {
        const type = e.target.value;
        console.log('type', type);
        setType(type);
    };

    const handleSort = (e) => {
        const sort = e.target.value;
        console.log('sort', sort);
        setSort(sort);
    };

    const handlePageChange = (page) => {
       
            setActivePage(page)
       
    }

    const totalPages = Math.ceil(vehicleData.length / perPage)

    console.log('vehicleData1', vehicleData[0]);
    return (
        <div>
            <Grid className={classes.root}>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <h3>Filter By Type</h3>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Filter By Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={handleFilter}
                                label="Filter by Type"
                            >
                                <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value="Bus">Bus</MenuItem>
                                <MenuItem value="Van">Van</MenuItem>
                                <MenuItem value="Car">Car</MenuItem>
                            </Select>
                        </FormControl>
                        <h3>Sort by Capacity</h3>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Sort by Capacity</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={handleSort}
                                label="Sort by Population"
                            >
                                <MenuItem value="null">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="asc">Low to High</MenuItem>
                                <MenuItem value="desc">High to Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid>
                    <div className={classes.divContainer}>
                        <SearchBar
                            loading={loading}
                            setLoading={setLoading}
                            value={query}
                            onChange={(val) => setQuery(val)}
                            suggestions={suggestions}
                        />
                    </div>
                    {vehicleData &&
                        vehicleData.filter((elem, index) => {
                            const offset = (activePage - 1) * perPage
                            const pageCondition = index >= offset && index < offset + perPage
                            return pageCondition
                        })
                            .map((item, id) => (
                                <div key={id} className={classes.divContainer}>
                                    <VehicleCard data={item} handleClick={handleClick} />
                                </div>
                            ))}
                </Grid>
                
            </Grid>
            <Grid className = {classes.cont}>
                    {
                        new Array(totalPages).fill(0).map((a, i) => <Button className = {classes.button} variant="contained" color="primary" key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</Button>)
                    }
                </Grid>
        </div>
    );
}
