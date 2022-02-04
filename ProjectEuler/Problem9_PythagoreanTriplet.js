const limit = 1000;

function getProductABC(num){
    let productABC=0;

    let a,b=2,c;

    a=num.toString();

    const Array = a.split("");
    for (let i=0;i<Array.length;i++){
        console.log(Array[i]);
    }

    return productABC;
}

getProductABC(987);