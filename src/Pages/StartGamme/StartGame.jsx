import { Link } from "react-router-dom";

function StartGame() {
    return(
        <div>
            <h1>start game</h1>
            <Link to={'/start'}>StartGame</Link>
        </div>
    )
}

export default StartGame;