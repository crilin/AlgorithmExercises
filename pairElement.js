function pairElement(str) {
    const strArray = str.split("");
    let pair = [];
    let value = "";

    for (let i=0;i<strArray.length;i++){
        value = strArray[i];

        if (value ==="A") {
            
            pair.push( [value,"T"]);
        }
        if (value ==="T") {
            pair.push( [value,"A"]);

        }
        if (value ==="C") {
            pair.push( [value,"G"]);

        }
        if (value ==="G") {
            pair.push( [value,"C"]);

        }    
    }

    return pair;
  }
  
  pairElement("GCG");