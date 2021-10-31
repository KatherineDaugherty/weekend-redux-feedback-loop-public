import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    //HANDLE SUBMIT FUNCTION 
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_COMMENTS",
            payload: comments
        })
        history.push('/review');
    }


    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1> Any comments you want to leave? </h1>
                <TextField
                    id="standard-basic"
                    label="Comments?"
                    variant="standard"
                    type="text"
                    value={comments}
                    onChange={event => setComments(event.target.value)}
                />
                <Button 
                variant="outlined"
                type="text">
                    Next</Button>
            </form>
        </>
    )
}
export default Comments;