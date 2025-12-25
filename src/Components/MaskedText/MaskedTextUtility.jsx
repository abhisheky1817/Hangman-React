export function getAllCharacters(word, usedLetters){

    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const guessdLetters = new Set(usedLetters);
    const characters = word.toUpperCase().split("").map(letter => {
        if(guessdLetters.has(letter)){
            return letter;
        }else{
            return "_";
        }
    });
    return characters.join('');

}

