import getButtonStyling from "./getButtonStyleType";

function Button({buttonType, text, styleType}) {

    return(
        <button
         type={buttonType}
         className={`px-4 py-2 ${getButtonStyling(styleType)} text-white rounded-md transition-all`}
         >
            {text}
        </button>
    )
}

export default Button;





















































/*
import getButtonStyling from "./getButtonStyleType";

function Button({ buttonType, text, styleType }) {
  return (
    <button
      type={buttonType}
      className={`px-4 py-2 ${getButtonStyling(styleType)} text-white rounded-md transition-all`}
    >
      {text}
    </button>
  );
}

export default Button;

the diffrence in both the code is in className line where in first code single quotes are used and in second backticks are used.

*/ 