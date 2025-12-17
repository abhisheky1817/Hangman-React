function getButtonStyling(styleType) {

    const primaryButtonStyling = " bg-blue-500 border border-blue-700  hover:bg-blue-700 ";
    const secondaryButtonStyling = " bg-gray-500 border border-gray-700 hover:bg-gray-700 ";
    const dangerButtonStyling = " bg-red-500 border border-red-700 hover:bg-red-700 ";

    if (styleType === "primary") {
        return primaryButtonStyling;
    } else if (styleType === "secondary") {
        return secondaryButtonStyling;
    } else if (styleType === "danger") {
        return dangerButtonStyling;
    } 

}

export default getButtonStyling;