import { Link } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer";

function PlayGame() {

    return(

        <div>
            <h1>play game</h1>
            <Link to="/start">Go to Start Game</Link>
        </div>
    )
}

export default PlayGame;