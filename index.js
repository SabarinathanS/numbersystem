//program to print Odd and Even numbers
const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
let even="", odd="";
for(let i of numbers){
    if(i%2==0) even+=i+" ";
    else odd+=i+" ";
}  
console.log(`Even numbers : ${even}\nOdd numbers : ${odd}`);