'use strict';

 const fs = require('fs');

 process.stdin.resume();
 process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    console.log(inputStdin);
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Write your code here

    if (k==0 | k==1){
        return 1;
    }

    var subset = new Array(k).fill(0);
    
    let result = 0;
    let a=0;

    // Gets the remainders of k and mark theirs position
    s.forEach(element => {
        a= element % k;
        subset[a]++;
        
    });

    // Get the half amount of k
    a=Math.floor(k/2)+1;

    // counts the elements which aren´t divisible by k
    for (let i=1;i< a; i++){

        if (i != k-i){
            result += Math.max(subset[i], subset[k-i]);
            
        }else{
            result++;
        }

        
    }
    
    result += (subset[0] > 0) ? 1 : 0;

    return result;
}


function main() {
    const ws = fs.createWriteStream('stdout.txt');

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);
    //const n = 4;

    const k = parseInt(firstMultipleInput[1], 10);
    //const k = 3;

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    // const s = [1,7,2,4];

    const result = nonDivisibleSubset(k, s);

    // return result;
    ws.write(result + '\n');

    ws.
    end();
}

// console.log(main());
