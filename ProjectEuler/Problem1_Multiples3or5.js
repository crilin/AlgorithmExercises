target=999;

// My Solution
function Multiples3or5(num) {
    let i=num;
    let sum=8;

    for (;i>5;i--){
        if (i%3===0 || i%5===0)
            sum+=i;
    }

    return sum;
}

Multiples3or5(target);

//******************************************************
//**               EULER SOLUTION                     **
//******************************************************
function SumDivisibleBy(n) {
    let p= target / n;

    return n * (p* (p+1)) / 2;
}

//**optimized answer**
SumDivisibleBy(3) + SumDivisibleBy(5) - SumDivisibleBy(15);