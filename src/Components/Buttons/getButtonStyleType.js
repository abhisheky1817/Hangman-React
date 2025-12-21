function getButtonStyling(styleType) {
  const primary = "bg-blue-500 border border-blue-700 hover:bg-blue-700";
  const secondary = "bg-gray-500 border border-gray-700 hover:bg-gray-700";
  const danger = "bg-red-500 border border-red-700 hover:bg-red-700";

  if (styleType === "primary") return primary;
  if (styleType === "secondary") return secondary;
  if (styleType === "danger") return danger;

  return primary;
}

export default getButtonStyling;
