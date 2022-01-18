
  function destroyer(arr, ...params) {
    let DArray = arr;
  
    for (let i=0;i<params.length;i++){
        DArray = myFunction(DArray,params[i]);
    }

    console.log(DArray);
    return DArray;
}

function myFunction(array, value) {
    let newArray=[];
    const auxArray = array;
    for (let j=0; j<auxArray.length;j++){
        if (auxArray[j]!==value && auxArray[j]!==-1) {
            newArray.push(auxArray[j]);
        }
    }
    return newArray; 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);