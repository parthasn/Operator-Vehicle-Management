import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/Auth/action';

import axios from 'axios'

const useStyles = makeStyles(() => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        outline: 'none',
        position: 'relative',
        flexWrap: 'wrap',
        marginLeft: "auto",
        backgroundColor: "black",
        color: "white"
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { isAuth } = useSelector((state) => state.auth);
    
    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <React.Fragment>
           <Toolbar className={classes.toolbar}>
                <MenuList className={classes.toolbar}>
                    {
                        isAuth? (
                            <MenuItem>
                        <Button  color="inherit" onClick = {handleLogout}>Logout</Button>
                    </MenuItem>
                        ) : (
                            <MenuItem component={Link} to="/">
                        Sign In
                    </MenuItem>
                        )
                    }
                </MenuList>
            </Toolbar>
        </React.Fragment>
    );
};

export default Navbar;
