function    fibonacci(n)    {
    if(n    ==  0){
        return  0;
    }
    if(n    ==  1){
        return  1;
    }
    if(n    ==  0   ||  n   ==  1){
        return  n;
    }

    return    fibonacci(n -   1)  +   fibonacci(n -2);    
}

console.log(fibonacci(5));

// https://www.w3schools.com/dsa/dsa_algo_simple.php
// https://www.naukri.com/code360/library/fibonacci-series-in-javascript   
// https://www.youtube.com/watch?v=6ji-oYS6EgM
// https://www.youtube.com/results?search_query=estructura+de+datos+y+algoritmos+Fibonacci+