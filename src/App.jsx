
import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer";

function App() {
  return (
    <div>
      <h1>Hangman Game</h1>

    <TextInputFormContainer  onSubmit={(value)=>{console.log("value from hidden is", value)}} />

    </div>
  );
}

export default App;




// <Button text="Primary" buttonType="submit" styleType="primary" />
 // <Button text="Secondary" buttonType="button" styleType="secondary" />
 //  <Button text="Danger" buttonType="button" styleType="danger" />