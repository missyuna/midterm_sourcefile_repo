
'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];


const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

const originalNames = Array.from(studentNames);

// part A
console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

// part B
console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push('Faith');
studentScores.push(88);

studentNames.unshift('Aaron');
studentScores.unshift(76);

for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log(`Number of students: ${studentNames.length}`);

// part C
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

const danielIndex = studentNames.indexOf('Daniel');

studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);


studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

// part D
console.log('\nPART D: CLASS STATISTICS');

const total = studentScores.reduce((acc, score) => acc + score,0);

const ave = total / studentScores.length;
const highest = Math.max(...studentScores);
const lowest = Math.min(...studentScores);

console.log(`Total Score: ${total}`);
console.log(`Average Score: ${ave.toFixed(2)}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);

// part E
console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScores = studentScores.filter(score => score >= 75);
const stats = studentScores.map(score => score >= 75 ? 'Passed' : 'Failed');
const atLeastOneFailed = studentScores.some(score => score < 75);
const allStudentsPassed = studentScores.every(score => score >= 75);

console.log(`Passing Scores: ${passingScores}`);
console.log(`Status: ${stats}`);
console.log(`Does At Least One Failed? ${atLeastOneFailed}`);
console.log(`Do all Students Passed? ${allStudentsPassed}`);

// part F
console.log('\nPART F: SORT AND SEARCH');

const sortedScores = Array.from(studentScores);
sortedScores.sort((a, b) => b - a);

const contains91 = studentScores.includes(91);
const indexOf91 = studentScores.indexOf(91);

console.log(`Scores from Highest to Lowest: ${sortedScores}`);
console.log(`Does it contain 91? ${contains91}`);
console.log(`Index of 91: ${indexOf91}`);

// part G
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {
  let totalActivityScore = 0;

  for (let j = 0; j < activityScores[i].length; j++) {
    console.log(
      `${originalNames[i]} Activity ${j + 1}: ${activityScores[i][j]}`
    );

    totalActivityScore += activityScores[i][j];
  }

  const activityAverage =
    totalActivityScore / activityScores[i].length;

  activityAverages.push(activityAverage);

  console.log(`${originalNames[i]}'s activity average: ${activityAverage.toFixed(2)}`);
}

console.log(`Activity Averages: ${activityAverages.map(avg => avg.toFixed(2))}`);

// part H
console.log('\nPART H: TEXT SUMMARY');
console.log(`Students: ${studentNames.join(' | ')}`);
