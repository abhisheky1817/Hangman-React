import {Route, Routes} from "react-router-dom"
import PlayGame from "./Pages/PlayGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";

function App() {
  return (
    <div>
      <h1>Hangman Game</h1>

    {/* <TextInputFormContainer  onSubmit={(value)=>{console.log("value from hidden is", value)}} /> */}

    <Routes>
        <Route path="/" element={<StartGame />} />
      <Route path = "/play" element = {<PlayGame/>} />
      <Route path = "/start" element = {<StartGame/>} />
      <Route  path="*"  element = {<div>not found</div>}/>
      

    </Routes>


    </div>
  );
}

export default App;




// <Button text="Primary" buttonType="submit" styleType="primary" />
 // <Button text="Secondary" buttonType="button" styleType="secondary" />
 //  <Button text="Danger" buttonType="button" styleType="danger" />