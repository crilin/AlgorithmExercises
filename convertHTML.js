function convertHTML(str) {
    let newStr = "";
    const strArray = str.split("");

    for (let i=0;i<strArray.length;i++){
        if (strArray[i]==="&"){
            newStr += "&amp;";
        }
        if (strArray[i]==="<"){
            newStr += "&lt;";
        }
        if (strArray[i]===">"){
            newStr += "&gt;";
        }
        if (strArray[i]==="\'"){
            newStr += "&apos;";
        }
        if (strArray[i]==="\""){
            newStr += "&quot;";
        }
        if (strArray[i].match(/[a-zA-Z]|[0-9]|\s/)){
            newStr += strArray[i];
        }
    }

    return newStr;
  }
  
  convertHTML("abc");