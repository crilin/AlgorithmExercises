const limit = 4000000;

//******************************************************
//**                  MY SOLUTION                     **
//******************************************************
function getFibonacci(num){
    let secuence = [1,2];
    let elem = secuence[0] + secuence[1];

    for (let i=2;elem<num;i++){
        secuence[i] = secuence[i-2] + secuence[i-1];
        elem = secuence[i];
    }
    return secuence;
}
function SumEvenFibonacciNumbers(num){
    let sum=0;
    let fibonacci = getFibonacci(num);

    for (let i=0;i<fibonacci.length;i++){
        
        if (fibonacci[i]%2==0)
            sum+=fibonacci[i];
        
    }

    return sum;
}

const resp = SumEvenFibonacciNumbers(limit);

//******************************************************
//**               EULER SOLUTION                     **
//******************************************************
function SumEvenFibonacciNumbers2(number){
    let sum=0;
    let a=1, b=1, c=a+b;

    // Every 3 third Fibonacci number is even
    while(c<number){
        sum=sum+c;
        a=b+c;
        b=c+a;
        c=a+b;
    }

    return sum;
}

const resp2 = SumEvenFibonacciNumbers(limit);

console.log("Respuesta: " + resp);
console.log("Respuesta2: " + resp2);