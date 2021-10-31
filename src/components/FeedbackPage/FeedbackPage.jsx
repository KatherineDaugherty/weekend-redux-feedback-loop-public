import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';


function FeedbackPage() {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = (event) => {
        // event.preventDefault();
        dispatch({
            type: "CLEAR"
        })
        //send back to first page 
        history.push('/');
    }


    return (
        <>
            <h1> Thanks for the feedback </h1>
            <h4> Your responses have been recorded</h4>
            <Button
                variant="outlined"
                onClick={(event) => handleSubmit(event)}>
                     Start a new form! </Button>
        </>
    )
}
export default FeedbackPage;