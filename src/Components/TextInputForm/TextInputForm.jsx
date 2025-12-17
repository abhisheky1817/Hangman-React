import TextInput from '../TextInput/TextInput';
import Button from '../Buttons/Button';
import { useState } from "react";

function TextInputForm({onSubmit}) {

    const [value, setValue] = useState(' ');

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

        <form className="flex" onSubmit={handleformsubmit}>
           
           <div className="mr-2 flex-1">

            <TextInput 

            label="Enter a word"
            type="password"
            value={value}
            onChange={handletextinputchange}
            />

           </div>

            <div className = "flex">

                <Button 
                text="ok"
                buttonType="submit"
                styleType="primary"
                />

            </div>


        </form>
    )

}

export default TextInputForm;