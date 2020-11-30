import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function EditVehicle(props) {
    console.log(props)
    const [ id, setId ] = useState("");
    const [ type, setType ] = useState('');
    const [ image, setImage ] = useState('');
    const [ registrationNumber, setRegistrationNumber ] = useState('');
    const [ capacity, setCapacity ] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        axios({
            method: 'get',
            url: `http://localhost:8000/api/vehicle/${props.match.params.id}`
        })
            .then((res) => {
                return (
                    setId(res.data._id),
                    setType(res.data.type),
                    setImage(res.data.image),
                    setRegistrationNumber(res.data.registrationNumber),
                    setCapacity(res.data.capacity)
                );
            })
            .catch((err) => console.log(err));
    }, [props.match.params.id]);

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.value);
    };

    const handleRegistrationNumberChange = (e) => {
        setRegistrationNumber(e.target.value);
    };

    const handleCapacityChange = (e) => {
        setCapacity(e.target.value);
    };

    const handleUpdate = () => {
        let payload = {
            type: type,
            image: image,
            registrationNumber: registrationNumber,
            capacity: capacity
        };

        let config = {
            method: 'post',
            url: `http://localhost:8000/api/vehicle/update/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload
        };

        axios(config)
            .then((res) => {
                props.history.push('/landingPage');
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
                        onChange={handleTypeChange}
                        name="type"
                        value={type}
                        id="outlined-basic"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: 350, margin: 5 }}
                        onChange={handleImageChange}
                        name="image"
                        value={image}
                        id="outlined-basic"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: 350, margin: 5 }}
                        onChange={handleRegistrationNumberChange}
                        name="registrationNumber"
                        value={registrationNumber}
                        id="outlined-basic"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: 350, margin: 5 }}
                        onChange={handleCapacityChange}
                        name="capacity"
                        value={capacity}
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
