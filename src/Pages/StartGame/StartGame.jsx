import { Link } from "react-router-dom";

function StartGame() {
    return(
        <div>
            <h1>start game</h1>
            <Link to="/play">Go to Play Game</Link>
        </div>
    )
}

export default StartGame;