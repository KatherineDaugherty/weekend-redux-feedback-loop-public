import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';



function Review() {

    const formData = useSelector((store) => store.formReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        console.log(`clicked`)

        //POST TO SERVER! 
        axios.post('/feedback', formData)
            .then(response => {
                console.log(`POSTED`);
                //ON TOWARDS FEEDBACK  
                history.push('/FeedbackPage');
            })
            .catch(err => {
                console.log(`error in POST`, err);
            })
    }

    return (
        <>
            <h2> Review your feedback! </h2>
            <p> Feelings: {formData.feeling}</p>
            <p> Understanding: {formData.understanding} </p>
            <p> Support: {formData.support} </p>
            <p> Comments: {formData.comments} </p>
            <Button 
            variant= "outlined"
            onClick={handleSubmit}> Submit </Button>
        </>
    )
}
export default Review;