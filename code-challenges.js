// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 100
// var temp2 = 500
// var temp3 = 212

// input: temperature
// output: string relating to boiling point
// Examples: 
    // input: 100 ---> "100 is below boiling point"
    // input: 500 ---> "500 is above boiling point"
    // input: 212 ---> "212 is at boiling point"
// Process:
    // create a function named tempNum that takes in a number called temp
    // if temp is less than 212 return "{temp} is below boiling point"
    // if temp is greater than 212 return "{temp} is above boiling point"
    // if temp is === 212 return "{temp} is at boiling point"
    
    // const tempNum = (temp) => {
    //     if(temp === 212) {
    //         return `${temp} is at boiling point`
    //     }  else if (temp < 212) {
    //         return `${temp} is below boiling point`
    //     } else if (temp > 212) {
    //         return `${temp} is above boiling point`
    //     }
    // }
    //     console.log(tempNum(temp1))
    //     console.log(tempNum(temp2))
    //     console.log(tempNum(temp3))




// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 22, 9, 13]

// // // input: [3, 7, 0, 36, -9], [8, -7, 22, 9, 13]
// // // output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]
// //Process:
//     // create a function named numArrays that takes array1 and array2. Create a variable named combinedNums with the variables myNumbers1 and myNumbers2 .concat to make a single array. Create a const named numArrays that take in array1 and array2. Return combinedNums. Use built-in method named .(sort) to sort the numbers from least to greatest in the combinedNums array.
   
//     // console.log(myNumbers1.concat(myNumbers2))
//     var combinedNums = myNumbers1.concat(myNumbers2)
  
//     const numArrays = (array1, array2) => {
//         return (combinedNums)
// }
//     console.log(combinedNums.sort((a, b) => a - b))

//     console.log(numArrays([3, 7, 0, 36, -9], [8, -7, 22, 9, 13]))
// // I do feel there could be a better way or more organized way to do this problem but I couldn't figure it out


// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

// var myString1 = "bravo"
// var myString2 = "charlie"

// input: single string
// output: single string with letters reversed
// Examples: 
    // input: "bravo" ---> "ovarb"
    // input: "charlie" ---> "eilrahc"
//Process:
    //create a function named "cohort". Create a variable named "nameArray" and split the string into an array. Next, .reverse() the nameArray and lastly, .join() the array back into a string

// const cohort = (name) => {
// var nameArray = name.split("")
//     nameArray.reverse()
//     return nameArray.join("")
// }
// console.log(cohort(myString1))
// console.log(cohort(myString2))





// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

// var numberExample1 = 42
// var numberExample2 = 27

// var numberExample3 = 7
// var numberExample4 = 19

// input: two numbers
// output: the difference of the bigger number from the smaller number
// example: 
    // input: 42,27 ---> "15"
    // input: 7,19 ---> "12"
// process:
    // create a function named "subtract" that takes in num1 and num2
    // create if and return (if num1 > num2, return num1 - num2)
    // create else if and return statements else if(num1 < num2, return num2 - num1, else if num1 === num2, return num1 - num2)

// const subtract = (num1, num2) => {
//     if(num1 > num2){
//         return num1 - num2
//     } else if(num1 < num2){
//         return num2 - num1
//     } else if(num1 === num2){
//         return num1 - num2
//     }
// }
    
// console.log(subtract(42, 27))
// console.log(subtract(7, 19))
// console.log(subtract(4, 100))
// console.log(subtract(45, 19))
// console.log(subtract(3, 3))



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

// var numberExampleRefactor1 = 42
// var numberExampleRefactor2 = "hello"

// var numberExampleRefactor3 = 27
// var numberExampleRefactor4 = 24

// input: number and word
// output: the difference of the bigger number from the smaller number, or "your input is not a number"
// example: 
    // input: 42,"hello" ---> "your input is not a number"
    // input: 27,24 ---> "3"
// process:
    // create a function named "subtract" that takes in num1 and num2
    // create if and return (if num1 > num2, return num1 - num2)
    // create else if and return statements else if(num1 < num2, return num2 - num1, else if num1 === num2, return num1 - num2)
    // create else if statement with typeof string and return "your input is not a number"


// const subtract = (num1, num2) => {
//     if(num1 > num2){
//         return num1 - num2
//     } else if(num1 < num2){
//         return num2 - num1
//     } else if(num1 === num2){
//         return num1 - num2
//     } else if(typeof string) {
//         return "your input is not a number"
//     }
// }
//     console.log(subtract(42, "hello"))
//     console.log(subtract(27, 24))