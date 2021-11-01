import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';



function Review() {

    //when the reducer has an object. you will need keys. like what I've done 
    //get information(values) OUT of store.  
    //useSelector to get information out of redux 
    const formData = useSelector((store) => store.formReducer);
    const history = useHistory();

    const handleSubmit = () => {
        console.log(`clicked`)

        //POST TO SERVER! 
        //package up object and send via POST 
        axios.post('/api/feedback', formData)
        // router, req.body ---- needs to be an object. not seperate reducers. 
        //shorthand = {feeling, understanding, support, comment}
        
        //PROMISE 
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
                variant="outlined"
                onClick={handleSubmit}> Submit 
                </Button>
        </>
    )
}
export default Review;