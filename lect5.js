// // // // // // // // // FUNCTIONS

// // // // // // // //  function myfunc(x, y) {
// // // // // // // //       s = x + y;
// // // // // // // //       return s;
// // // // // // // //  }

// // // // // // // //  // ARROW FUNCTION
// // // // // // // // const arrowSum = (a, b) => {
// // // // // // // //     console.log(a + b);
// // // // // // // //  }

// // // // // // // // //  PQ-1

// // // // // // // // function countvowels(str) {
// // // // // // // //     let count = 0;
// // // // // // // //     for (const char of str) {
// // // // // // // //        if(char ==="a"
// // // // // // // //         || char ==="e" 
// // // // // // // //         || char ==="i" 
// // // // // // // //         || char ==="o" 
// // // // // // // //         || char ==="u" 
// // // // // // // //     ) {
// // // // // // // //         count++;
// // // // // // // //     }
// // // // // // // //     }
// // // // // // // //     console.log(count);
// // // // // // // // }

// // // // // // // // // PQ-2
// // // // // // // // const countvow = (str) => {
// // // // // // // //      let count = 0;
// // // // // // // //     for (const char of str) {
// // // // // // // //        if(char ==="a"
// // // // // // // //         || char ==="e" 
// // // // // // // //         || char ==="i" 
// // // // // // // //         || char ==="o" 
// // // // // // // //         || char ==="u" 
// // // // // // // //     ) {
// // // // // // // //         count++;
// // // // // // // //     }
// // // // // // // //     }
// // // // // // // //     console.log(count);       
// // // // // // // // }

// // // // // // // // // FOREACH LOOP IN ARRAYS
// // // // // // // //  let arr = [1, 2, 3, 4, 5];
// // // // // // // //  arr.forEach(function printval(val) {
// // // // // // // //     console.log(val);
// // // // // // // //  });

// // // // // // //  let arr = ["hyd", "pune", "delhi"];
// // // // // // //  arr.forEach((val) => {
// // // // // // //     console.log(val.toUpperase());
// // // // // // //  });

// // // // // // // PQ
// // // // // // let num = [ 1, 2, 3, 4, 5, 6, 7];
// // // // // // num.forEach((num) => {
// // // // // //     console.log(num**2);
// // // // // // });


// // // // // // SOME MORE ARRAY METHODS 
// // // // // // 1) MAP METHOD
// // // // // let arr = [1, 2, 3, 4, 5];
// // // // // let squarearr = arr.map((val) => {
// // // // //     return val ** 2;
// // // // // });
// // // // // console.log(squarearr);
// // // // // // 2) FILTER METHOD
// // // // let num = [1,2,3,4,5,6]
// // // // let evennum = num.filter((val) => {
// // // //     return val % 2 ===0;
// // // // });
// // // // console.log(evennum);
// // // // // 3) REDUCE METHOD
// // //  let arr = [1,2,3,4,5];
// // //  let sum = arr.reduce((arr, curr) => {
// // //      return arr + curr;
// // //  });
// // //  console.log(sum);  

// // let arr = [1, 2, 3, 4, 5]
// // const op = arr.reduce((prev, curr) =>{
// //     return prev > curr? prev : curr;
// // });
// // console.log(op);

// // PQ 
// let marks = [ 93, 35, 76, 97]
// let op = marks.filter((val) =>{
//     return val > 90
// });
// console.log(op);

// PQ
let n = prompt("enter a number :");
arr = [];
for (let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log("newarr =", arr);
let sum = arr.reduce((res, curr) => {
    return res + curr
});
console.log("sum =", sum);
let fact = arr.reduce((res, curr) => {
    return res * curr
});
console.log("product =", fact);