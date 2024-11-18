//program to find all the prime numbers from the given array
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
let primeN=[];
  for( let i of numbers){
    let prime=0;
    for(let j=2; j<=i/2; j++){
       if(i%j==0) prime++;
    }
    if(prime==0) primeN.push(i);
  }
  console.log(`Prime numbers : ${primeN}`);
let max=0; min=primeN[0]; sum=0;
for(let x of primeN){
    if(max<x) max=x;
    sum+=x;
}
for(let h of primeN){
    if(min>h) min=h;
}
console.log(`Maximum of Prime Number : ${max} \nMinimum of Prime Numbers : ${min} \nSum of all prime numbers : ${sum}`);