function translatePigLatin(str) {
    let newStr=str;
    let n = 0;
    let char="";
    const _str = str.split("");

    n = str.match(/[a|e|i|o|u]/);

    if (n !== null){
      if (n.index > 0) {
        for (let i=0;i<n.index;i++){
          char = str.charAt(i);
          newStr = myChange(newStr,char);
        }
      
      }else
        newStr=newStr+"w";
  
    }
    
    newStr= newStr + "ay";

    return newStr;
  }
  
  function myChange(str,char) {
    return str.slice(1)+char;
  }

  translatePigLatin("schwartz");