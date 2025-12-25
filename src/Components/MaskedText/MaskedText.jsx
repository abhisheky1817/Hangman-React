{/* text means the word to be guessed */}
{/* usedLetters the letter that has been guessed so far */}


import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({text , usedLetters}){

    const Letters = getAllCharacters(text, usedLetters).split('');

    return(

       <>
               {Letters.map((letter, index) => (
                   <span key = {`letter-${index}`} className="inline-block mx-1" >{letter}</span>
               ))} 

       </>

    )

}


export default MaskedText;