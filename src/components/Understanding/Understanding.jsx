import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');


    //HANDLE SUBMIT FUNCTION 
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_UNDERSTANDING",
            payload: understanding
        })
        history.push('/supported');
    }
    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1> How well are you Understanding the content </h1>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={understanding}
                    required
                    onChange={event => setUnderstanding(event.target.value)}
                />
                <Button
                    variant="outlined"
                    type="submit">
                    Next </Button>
            </form>
        </>
    )
}
export default Understanding;