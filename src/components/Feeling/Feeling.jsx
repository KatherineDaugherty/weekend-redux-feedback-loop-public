import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');

    //HANDLE SUBMIT FUNCTION 
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })
        //send to next page 
        history.push('/understanding');
    }

    return (
        <>
            <form
                className="form"
                onSubmit={(event) => handleSubmit(event)}>
                <h1> How are you feeling today? </h1>
                {/* Attributes */}
                <Stack direction="row" spacing={20}>
                    <TextField
                        id="standard-basic"
                        label="Feeling?"
                        variant="standard"
                        type="number"
                        min="1"
                        max="5"
                        value={feeling}
                        required
                        onChange={event => setFeeling(event.target.value)}
                    />
                    <Button
                        variant="outlined"
                        type="submit">
                        Next </Button>
                </Stack>
            </form>
        </>
    )
}
export default Feeling;