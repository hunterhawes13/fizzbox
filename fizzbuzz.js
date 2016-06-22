function sumOfArray(arr){
    var sum = 0;
    for (var i in arr) { sum += arr[i];}
    return sum;
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

function sum(a, b){
    return a + b;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

function GCD(a,b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b === 0) return a;
        a %= b;
        if (a === 0) return b;
        b %= a;
    }
}



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
console.log(GCD(5,1));

function LCM(a, b){
   if ( a === 0){return 1;}
   else{
     console.log((a*b)/ GCD(a,b));
     return ((a*b)/ GCD(a,b));
   }
}

console.assert(LCM(10,10) === 10);
console.assert(LCM(2,5) === 10);
console.assert(LCM(3,6) === 6);
console.assert(LCM(0,1) === 1);


// function fizzbuzz (N) {
//   var fizzBuzzString = "";
//   for (var i = 1; i<= N; i++);
//    if ((i % 3 !== 0) && (i % 5 !==0)){
//      return ".";
//    } else {
//      i % 3 ===0:
//    }
//    }
//  }   
  
  
  
  
  
  
// }
