// 1.Write a function that return the sum of two numbers
// 2.Write a function that return the sum of all number regardll of # params
// Hints : Arithmatic Operator, Rest Operator, forEach();

function twoSum(num1, num2) {
  return num1 + num2;
}

console.log(twoSum(10,50));

function sumAllNumber(...number){
  console.log(typeof number);
  let total = 0;
  number.forEach((element,index)=>{
    total += element;
    console.log(element);
  });
  return total;
}
// let numArray = [2,5,8,4,9];
console.log(sumAllNumber(2,5,8,4,9));
