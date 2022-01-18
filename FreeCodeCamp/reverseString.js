function reverseString(str) {
    let strArray = str.split(" ");
    let array = [];
    str="";
    for (let i=strArray.length;i>0;i--){
      array = strArray[i-1].split("");
      for(let j=array.length;j>0;j--){
        str += array[j-1];
      }
      str +=" ";
    }
    console.log(str);
    return str;
  }
  
  reverseString("Greetings from Earth");