import {useHistory} from 'react-router-dom';

function Feeling() {

const handleSubmit = () => {
    console.log(`clicked`);
}

    return (
        <>
            <form>

                <h1> How are you feeling today? </h1>
                <input
                    type="text"
                    placeholder="feeling"
                />
                <button onClick={handleSubmit}>Next</button>


            </form>
        </>
    )
}
export default Feeling;