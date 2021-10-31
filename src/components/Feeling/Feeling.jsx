import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');

    //HANDLE SUBMIT FUNCTION 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (feeling > 0 && feeling <= 5) {

            dispatch({
                type: "ADD_FEELING",
                payload: feeling
            })
            //send to next page 
            history.push('/understanding');
        } else {
            alert('Please enter a number 1 -5');
        }
    };

    return (
        <>
            <form
                className="form"
                onSubmit={(event) => handleSubmit(event)}>
                <h1> How are you feeling today? </h1>
                {/* Attributes */}
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
                    type="submit"
                    style={{
                        width: '30px',
                        height: '25px',
                        paddingLeft: '15px',
                        margin: '15px'
                    }}>
                    Next </Button>
            </form>
        </>
    )
}
export default Feeling;