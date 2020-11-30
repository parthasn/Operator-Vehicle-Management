import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
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

export default function TripCard({ data }) {
    const classes = useStyles();
    console.log('trip data', data);
    if (data) {
        var { from, to, filledCapacity, _id } = data;
    }

    const handleTripDelete = () => {
        try {
            axios.delete(`http://localhost:8000/api/trip/${_id}`);
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
                            <img className={classes.img} alt="complex" src="https://via.placeholder.com/150" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="body2">
                                    From City: {from}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    To City: {to}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Capacity Filled: {filledCapacity}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid>
                            <DeleteIcon color="red" onClick={handleTripDelete} />
                        </Grid>
                        <Grid>
                            <Link to={`/editTrip/${_id}`}>
                                <EditIcon/>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
