import { Link } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer";
import MaskedText from "../../Components/MaskedText/MaskedText";

function PlayGame() {

    return(

        <div>
            <h1>play game</h1>
             
             <MaskedText text="EXAMPLE" usedLetters={['A','E','X']} />
            <hr/>
            <Link to="/start">Go to Start Game</Link>
        </div>
    )
}

export default PlayGame;