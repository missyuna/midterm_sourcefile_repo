// display all student scores
console.log("Student Scores");
console.log("85");
console.log("72");
console.log("91");
console.log("64");
console.log("78");
console.log(" ");

// determine whether each student passed or failed
let score1 = 85;
let score2 = 72;
let score3 = 91;
let score4 = 64;
let score5 = 78;

// student 1
    let grade1;

    if (100 >= score1 && score1 >= 90){
        grade1 = " - Excellent";
    } else if (89 >= score1 && score1 >= 80){
        grade1 = " - Very Good";
    } else if (79 >= score1 && score1 >= 75){
        grade1 = " - Good";
    } else {
        grade1 = "";
    }

    let result1 = (score1 >= 75) ? "Passed" : "Failed";
    console.log("Student 1: " + score1 + grade1 + " - " + result1);

// student 2
let grade2;

if (100 >= score2 && score2 >= 90){
    grade2 = " - Excellent";
} else if (89 >= score2 && score2 >= 80){
    grade2 = " - Very Good";
} else if (79 >= score2 && score2 >= 75){
    grade2 = " - Good";
} else {
    grade2 = "";
}

let result2 = (score2 >= 75) ? "Passed" : "Failed";
console.log("Student 2: " + score2 + grade2 + " - " + result2);

// student 3
let grade3;

if (100 >= score3 && score3 >= 90){
    grade3 = " - Excellent";
} else if (89 >= score3 && score3 >= 80){
    grade3 = " - Very Good";
} else if (79 >= score3 && score3 >= 75){
    grade3 = " - Good";
} else {
    grade3 = "";
}

let result3 = (score3 >= 75) ? "Passed" : "Failed";
console.log("Student 3: " + score3 + grade3 + " - " + result3);

// student 4
let grade4;

if (100 >= score4 && score4 >= 90){
    grade4 = " - Excellent";
} else if (89 >= score4 && score4 >= 80){
    grade4 = " - Very Good";
} else if (79 >= score4 && score4 >= 75){
    grade4 = " - Good";
} else {
    grade4 = "";
}

let result4 = (score4 >= 75) ? "Passed" : "Failed";
console.log("Student 4: " + score4 + grade4 + " - " + result4);

// student 5
let grade5;

if (100 >= score5 && score5 >= 90){
    grade5 = " - Excellent";
} else if (89 >= score5 && score5 >= 80){
    grade5 = " - Very Good";
} else if (79 >= score5 && score5 >= 75){
    grade5 = " - Good";
} else {
    grade5 = "";
}

let result5 = (score5 >= 75) ? "Passed" : "Failed";
console.log("Student 5: " + score5 + grade5 + " - " + result5);
console.log(" ");

// calculate the total score
let total = score1 + score2 + score3 + score4 + score5;
console.log("Total Score: " + total);

// calculate the average score
let ave = total / 5;
console.log("Average Score: " + ave);

// display the highest score
let highest = Math.max(score1, score2, score3, score4, score5);
console.log("Highest Score: " + highest);

// display the lowest score
let lowest = Math.min(score1, score2, score3, score4, score5);
console.log("Lowest Score: " + lowest);

// display the number of students who passed
let pCount = 0;
if (score1 >= 75) pCount++;
if (score2 >= 75) pCount++;
if (score3 >= 75) pCount++;
if (score4 >= 75) pCount++;
if (score5 >= 75) pCount++;
console.log("Number of Students Passed: " + pCount);

// display the number of students who failed 
let fCount = 5 - pCount;
console.log("Number of Students Failed:" + fCount);
