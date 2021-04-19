const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumOfEvenNumbers = (arrayOfNumbers) => arrayOfNumbers
.reduce((acc, element) => element % 2 === 0 ? acc + element : acc, 0) 
console.log(sumOfEvenNumbers(numbers));