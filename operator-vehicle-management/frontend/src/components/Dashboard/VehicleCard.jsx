import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link} from 'react-router-dom';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
        cursor: 'pointer'
    },
    image: {
        width: 150,
        height: 150
    },
    img: {
        margin: '20px',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    header: {
        color: 'red',
        fontSize: '24px',
        fontWeight: 600
    }
}));

export default function VehicleCard({ data, handleClick }) {
    const classes = useStyles();
    console.log('data', data);
    if (data) {
        var { type, image, registrationNumber, capacity, totalTrips, _id } = data;
    }

    const handleDelete = () => {
        try {
            axios.delete(`http://localhost:8000/api/vehicle/${_id}`);
            window.location.reload(false);
            
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.header}>
                                    Type: {type}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Registration Number: {registrationNumber}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Capacity: {capacity}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Total trips taken: {totalTrips}
                                </Typography>
                                <Button onClick={() => handleClick(registrationNumber)} color="primary">
                                    Trips
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid>
                            <DeleteIcon color="red" onClick={handleDelete} />
                        </Grid>
                        <Grid>
                            <Link to={`/editVehicle/${_id}`}>
                                <EditIcon/>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
