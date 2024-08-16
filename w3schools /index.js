// https://www.youtube.com/watch?v=GsquoxlZX5E
// function    fibonacci(limit){
//     const arrFib    =   [0, 1];
//     for(let i   =   2;  i   <   limit;  i++)    {
//         arrFib.push(arrFib[i    -   1]  +   arrFib[i    -   2]);
//     }
//     return arrFib;
// }

// const testFib   =   fibonacci(20);
// console.log(testFib);

function    fibonacci(limit){
    const   arrFib  =   [0, 1];
    for(let i   =   2;  i   <   limit;  i++){
        arrFib.push(arrFib[i    -   1]  +   arrFib[i    -   2])
    }
    return  arrFib;
}

const testFib   =   fibonacci(3);
console.log(testFib);