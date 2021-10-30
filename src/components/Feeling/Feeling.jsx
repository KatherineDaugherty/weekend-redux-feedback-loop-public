import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';


function Feeling() {

    const feelingReducer = useSelector(store => store.feelingReducer);
    const [newFeeling, setNewFeeling] = useState('');
    
    const dispatch = useDispatch();

    //HANDLE SUBMIT FUNCTION 
    const handleSubmit = (event) => {
        console.log(`clicked`);
        event.preventDefault();

        dispatch({
            type: "ADD_FEELING",
            payload: newFeeling
        })
        setNewFeeling('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <h1> How are you feeling today? </h1>
                {/* Attributes */}
                <input
                    type="text"
                    placeholder="feeling"
                    value={newFeeling}
                    onChange={event => setNewFeeling(event.target.value)}
                />
                <button type="submit"> Next</button>
            </form>
        </>
    )
}
export default Feeling;