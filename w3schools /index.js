const N = parseInt(prompt('Introduce el numero de terminos:'));
let fn1 =   0,  fn2 =   1,  nextFibonacci;

console.log('la serie de fibonacci subiendo hasta n terminos es:');

for (let i  =   1;  i <=    N;  i++){
    console.log(fn1);
    nextFibonacci   =   fn1 +   fn2;
    fn1 =   fn2;
    fn2 =   nextFibonacci
}



// https://www.w3schools.com/dsa/dsa_algo_simple.php
// https://www.naukri.com/code360/library/fibonacci-series-in-javascript   