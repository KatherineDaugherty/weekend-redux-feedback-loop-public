
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function Supported() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState('');

    //HANDLE SUBMIT FUNCTION 
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_SUPPORT",
            payload: support
        })
        history.push('/comments');
    }


    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1> How well are you being supported? </h1>
                <TextField
                    id="standard-basic"
                    label="Supported?"
                    variant="standard"
                    type="number"
                    min="1"
                    max="5"
                    value={support}
                    required
                    onChange={event => setSupport(event.target.value)}
                />
                <Button 
                variant="outlined"
                 type="submit"> 
                 Next </Button>
            </form>
        </>
    )
}
export default Supported;