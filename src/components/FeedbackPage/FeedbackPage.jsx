import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function FeedbackPage () {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        // event.preventDefault();

        dispatch({
            type: "CLEAR"
        })
        history.push('/feeling');
    }


    return(
        <>
        <h1> Thanks for the feedback </h1>
    <button onClick={(event)=> handleSubmit(event)}> Start a new form! </button>
        </>
    )
}
export default FeedbackPage;