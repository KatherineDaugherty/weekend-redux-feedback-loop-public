import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

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
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1> How are you feeling today? </h1>
                {/* Attributes */}
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={feeling}
                    required
                    onChange={event => setFeeling(event.target.value)}
                />
                <button type="submit"> Onward Ho </button>
            </form>
        </>
    )
}
export default Feeling;