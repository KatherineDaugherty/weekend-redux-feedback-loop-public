import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//NEED USESTATE FOR LOCAL STATE STORAGE 
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Feeling() {

    //Hook syntax - to get access to the functions
    //importing dependencies to be declared before use so they render correctly
    const dispatch = useDispatch();
    const history = useHistory();
    // useState for local storage. - temporary holding box  
    const [feeling, setFeeling] = useState('');

    //HANDLE SUBMIT FUNCTION -- could do inline 
    const handleSubmit = (event) => {
        event.preventDefault();
        //use with form tag to prevent refresh and submit to server
        if (feeling > 0 && feeling <= 5) {

            //data you send is a payload 
            //object with key of {type: "SCREAMING_SNAKE, payload: "}
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
                    value={feeling} //controlled input- best practice 
                    required
                    // set feeling with each onChange- with local state 
                    onChange={event => setFeeling(event.target.value)}
                    //setting a local variable 
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