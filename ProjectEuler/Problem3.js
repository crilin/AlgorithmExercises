//*************************************************/
//              LARGEST PRIMER FACTOR 
//*************************************************/
function LargestPrimeFactor(num){
    let factor=1, aux=0;

    // Reduce el Numero por el factor 2
    if (num%2==0){
        num = num/2;
        while(num%2==0){
            num = num/2;
        }
    }

    while(num>1){
        factor+=2;
        if(isPrime(factor)){
            aux=num%factor;
            if (num%factor==0){
                num = num/factor;
                while(num%factor==0){
                    num = num/factor;
                }       
            }
        }
    }

    return factor;
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

console.log(LargestPrimeFactor(600851475143));

// DUDOSA ESTA RESPUESTA
console.log("Euler answer:" + LargestPrimeFactor2(600851475143));
//******************************************************
//**               EULER SOLUTION                     **
//******************************************************
function LargestPrimeFactor2(num){

    let lastFactor=0,factor;

    if(num%2==0){
        lastFactor=2;
        num = num/2;
        while (num%2==0){
            num = num/2;
        }
    }else{
        lastFactor=1;
    }
    factor=3;
    let maxFactor=Math.sqrt(num);

    while((num>1) && (factor<=maxFactor)){
        if (num%factor==0){
            num = num/factor;
            lastFactor=factor;
            while(num%factor==0){
                num = num/factor;
            }
            maxFactor=Math.sqrt(num);
        }
        factor+=2;
    }

    if (num=1)
            return lastFactor;

        return num;
}