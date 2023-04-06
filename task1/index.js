// using closure build fibonoci series


function fibonacci() {
    let a = 0, b = 1;
  
    function next() {
      let c = a;
      a = b;
      b += c;
      return c;
    }
  
    return next;
  }
  
  const fib = fibonacci();
  console.log(fib()); 
  console.log(fib()); 
  console.log(fib()); 
  console.log(fib());
  console.log(fib()); 
  console.log(fib()); 
  console.log(fib()); 

  




