// // // let a = 3;
// // // let b = 5
// // // console.log("a + b =", a + b);


// // let a = 5;
// // if(a % 2 ==0){
// //     console.log(a, "is even");
// // } else {
// //     console.log(a, "is odd");
// // }


// // let age = 10;
// // let result = age >= 18 ? "adult" : "not adult";
// // console.log(result); 


// // alert("sharib")


// let num = prompt("enter a number");

// if(num % 5 === 0){
//     console.log(num, "is multiple of 5")
// } else {
//      console.log(num, "is  NOT multiple of 5")
// }
let marks = prompt("Enter the marks");
let grade;
if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
    
} else if (marks >= 90 && marks <= 100){
    grade = "A";
} else if (marks >= 70 && marks <= 90){
    grade = "B";
} else if (marks >= 50 && marks <= 70){
    grade = "C";
} else {
    grade = "D";
}
if(marks != undefined){
  xconsole.log("your grade according to your marks is :", grade);  
}