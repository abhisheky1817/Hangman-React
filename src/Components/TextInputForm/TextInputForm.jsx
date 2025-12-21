import TextInput from '../TextInput/TextInput';
import Button from '../Buttons/Button';


function TextInputForm({handleformsubmit, handletextinputchange, setInputtype, value, inputType}) {

    return(

        <form className="flex" onSubmit={handleformsubmit}>
           
           <div className="mr-2 flex-1">

            <TextInput 

            label="Enter a word"
            type={inputType}
            value={value}
            onChange={handletextinputchange}
            />

           </div>

           <div>
            
            <Button
             buttonType="button"
            styleType="secondary"
             text={inputType=== 'password' ? 'show' : 'hide'}
             onClickHandler = {()=>setInputtype(inputType === 'password' ? 'text' : 'password')}
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