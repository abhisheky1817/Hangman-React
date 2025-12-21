import { useState } from "react";
import TextInputForm from "./TextInputForm";


function TextInputFormContainer({ onSubmit }) {

      const [value, setValue] = useState('');
      const [inputType, setInputtype] = useState('password');

      function handleformsubmit(event){
                event.preventDefault();
                console.log("form submitted",value);
                onSubmit ?.(value); //if onSubmit define call it with a value
            }
        
            function handletextinputchange(event){
                console.log("text input change");
                console.log(event.target.value);
                setValue(event.target.value);
            }

    return(
      
        // calling the presentation layer

       <TextInputForm
         handleformsubmit={handleformsubmit}
         handletextinputchange={handletextinputchange}
         value={value}
         inputType={inputType}
         setInputtype={setInputtype}

       />

    )
}

export default TextInputFormContainer;