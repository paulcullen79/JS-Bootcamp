//student score, total possible score
//

let studentScore = 100
let total = 100

let gradeCalc = function(score, total) {
    return (score/total) * 100
}

let grade = gradeCalc(studentScore)

if (grade <= 100 && grade >= 90 ) {
    console.log(`You got an A (${grade}%)! :)`)
}   else if (grade < 90 && grade >= 80) {
    console.log(`You got a B (${grade}%) :)`)
}   else if (grade < 80 && grade >= 70) {
    console.log(`You got a C (${grade}%)`)
}   else if (grade < 70 && grade >= 60) {
    console.log(`You got a D (${grade}%)`)
}   else {
    console.log(`You got an F (${grade}% :(`)
}
