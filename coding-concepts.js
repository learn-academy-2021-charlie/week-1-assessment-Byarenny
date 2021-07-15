// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer: "11"
// b) Verify and explain: I was incorrect, I started count at 0 but I see that in this case, you do not. I believe you only count from 0 when referencing a single character in a string by its index


// --------------------2) What will this log?

// var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: "l"
// b) Verify and explain: I was correct, I counted from the string index starting at 0 to 3 and landed on "l"


// --------------------3) What will this log?

// var languages = ["JavaScript", "Ruby", "Python", "C++"]
// var index = 1
// console.log(languages[index])

// a) Your answer: "Javascript"
// b) Verify and explain: I did not count from 0, I seem to not have a good understanding of when I need to count from 0. I will do further studying on that. 


// --------------------4) What will this log?

// var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY, SUNDAY"]
// b) Verify and explain: the terminal gave me "weekendDays.toUpperCase is not a function" I believe it's because .toUpperCase does not work on arrays.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: ["6", "6", "7"]
// b) Verify and explain: I was incorrect, the terminal showed "number". I believe this is becauase the typeof described the type of data ".length" would give.
