const limit = 2000000;

function sumPrimes(num) {
    let sumAll = 0;

    if (num > 2)
        sumAll+=2;
    else 
        return 0;

    if (num > 3)
        sumAll+=3;
    else
        return sumAll;

    while ( num > 3){
    
        if (isPrime(num)){
            //console.log("Es primo: "+num);
            sumAll += num;
        }
        num--;
    }

    return sumAll;
  }


function isPrime(num) {
    var n=1;
    let flag=0;
    
    for(let i=2;i<=num/2;i++){
        if (num % i === 0){
            flag = 1;
            break;
        }
    }

    if (flag===1)
        return false;

    return true;

}

  const sum = sumPrimes(limit);

//******************************************************
//**               EULER SOLUTION                     **
//******************************************************
function sumPrimes2(num){
    let sumAll=0;


    return sumAll;
}

  console.log(10);