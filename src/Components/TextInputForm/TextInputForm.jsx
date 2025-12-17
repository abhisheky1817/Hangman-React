import TextInput from '../TextInput/TextInput';
import Button from '../Buttons/Button';

function TextInputForm({}) {


    function handelformsubmit(event){
        event.preventDefault();
        console.log("form submitted");
    }

    return(

        <form className="flex" onSubmit={handelformsubmit}>
           
           <div className="mr-2 flex-1">

            <TextInput 

            label="Enter a word"
            type="password"
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