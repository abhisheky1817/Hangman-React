import { useNavigate } from "react-router-dom";  
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer";

function StartGame() {


    const navigate = useNavigate();

    function handlesubmit(){
        navigate("/play");
    }


    return(
        <div>
            <h1>start game</h1>

                <TextInputFormContainer onSubmit={handlesubmit} />

        </div>
    )
}

export default StartGame;