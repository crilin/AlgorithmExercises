'use strict';

 const fs = require('fs');

 process.stdin.resume();
 process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     console.log(inputStdin);
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

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
    for(let i=0; s.lenght;i++){
        console.log(s[i]);
    }

    return 0;
}


function main() {
    const ws = fs.createWriteStream('stdout.txt');

    // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    //const n = parseInt(firstMultipleInput[0], 10);
    const n = 4;

    //const k = parseInt(firstMultipleInput[1], 10);
    const k = 3;

    //const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const s = [19,10,12,10,24,25,22];

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}

main();