import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function EditTrip(props) {
    console.log("edit props",props)
    const [ id, setId ] = useState("");
    const [ from, setFrom ] = useState('');
    const [ to, setTo ] = useState('');
    const [ filledCapacity, setFilledCapacity ] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        axios({
            method: 'get',
            url: `http://localhost:8000/api/trip/${props.match.params.id}`
        })
            .then((res) => {
                return (
                    setId(res.data._id),
                    setFrom(res.data.from),
                    setTo(res.data.to),
                    setFilledCapacity(res.data.filledCapacity)
                );
            })
            .catch((err) => console.log(err));
    }, [props.match.params.id]);

    const handleFromChange = (e) => {
        setFrom(e.target.value);
    };

    const handleToChange = (e) => {
        setTo(e.target.value);
    };


    const handleFilledCapacityChange = (e) => {
        setFilledCapacity(e.target.value);
    };

    const handleUpdate = () => {
        let payload = {
            from: from,
            to: to,
            filledCapacity: filledCapacity
        };

        let config = {
            method: 'post',
            url: `http://localhost:8000/api/trip/update/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload
        };

        axios(config)
            .then((res) => {
                props.history.goBack()
            })
            .catch((err) => alert(err));
    };

    return (
        <div style={{ margin: 'auto', width: 350, position: 'relative', top: 100 }}>
            <form>
                <h2>Edit Page</h2>
                <div>
                    <TextField
                        style={{ width: 350, margin: 5 }}
                        onChange={handleFromChange}
                        name="from"
                        value={from}
                        id="outlined-basic"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: 350, margin: 5 }}
                        onChange={handleToChange}
                        name="to"
                        value={to}
                        id="outlined-basic"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: 350, margin: 5 }}
                        onChange={handleFilledCapacityChange}
                        name="filledCapacity"
                        value={filledCapacity}
                        id="outlined-basic"
                        variant="outlined"
                    />
                </div>

                <div>
                    <Button onClick={handleUpdate} style={{ marginLeft: 5 }} variant="contained" color="primary">
                        UPDATE
                    </Button>
                </div>
            </form>
        </div>
    );
}
