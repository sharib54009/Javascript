// PQ-1
 for (let num = 0; num <= 40; num++){
     if(num%2 == 0   ){
     console.log("num =", num);
     } 
 }
// PQ-2
 let gamenum = 20;
 let usernum = prompt("guess the number : ");
 while (gamenum != usernum) {
     usernum = prompt("You entered a wrong number...!");

 }
 console.log("congrats u entered the right number....!");