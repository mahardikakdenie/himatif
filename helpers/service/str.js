const strDisplayText = (text, symbol) =>  {
    let newText = [];
    let newStr = "";
    const newArray = text.split(symbol);
    for (let key = 0; key < newArray.length; key++) {
      newText[key] =
        newArray[key].charAt(0).toUpperCase() + newArray[key].slice(1).toLowerCase();
    }

    for (let i = 0; i < newText.length; i++) {
      newStr += newText[i] + " ";
    }

    if (newStr.includes('Add')) {
      const addTextArray = newStr.split(' ');
      if (addTextArray.length === 4) {
        newStr = addTextArray[2] + " " + addTextArray[1]
      } 
    }

    return newStr;
}


export default strDisplayText 