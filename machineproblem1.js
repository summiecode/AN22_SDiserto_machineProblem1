console.log("\nProgram: Computation of grades using function");
console.log("Programmer: Summie Diserto");
console.log("Section: BSCS AN22");
console.log("Start date: June 2");
console.log("End date: June 2");
console.log();

const readline = require('readline-sync');

function calculateFinalGrade(classParticipation, summativeAssessment, finalExamination) {
  const grade = Math.round((classParticipation * 0.3) + (summativeAssessment * 0.3) + (finalExamination * 0.4));
  return grade;
}

function calculateLetterGrade(finalGrade) {
  if (finalGrade >= 90) {
    return "A";
  } else if (finalGrade >= 80) {
    return "B";
  } else if (finalGrade >= 70) {
    return "C";
  } else if (finalGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const students = 5;

// Initialize empty arrays to store the grades and names 
const names = [];
const classParticipationGrades = [];
const summativeGrades = [];
const finalExamGrades = [];
const finalGrades = [];
const letterGrades = [];

console.log("===================================================");
console.log("\tEnter the grades for each student");


for (let i = 0; i < students; i++) {
  console.log("===================================================");

    console.log(`Student ${i + 1}:`);
      const name = readline.question("Enter the name of the student: ");
  names.push(name);
  const classParticipationGrade = parseFloat(readline.question("Enter class participation grade: "));
  const summativeGrade1 = parseFloat(readline.question("Enter summative assessment 1: "));
  const summativeGrade2 = parseFloat(readline.question("Enter summative assessment 2: "));
  const summativeGrade3 = parseFloat(readline.question("Enter summative assessment 3: "));
  const finalExamGrade = parseFloat(readline.question("Enter major exam grade: "));
  
  console.log("===================================================\n");

  const summativeAverage = Math.round((summativeGrade1 + summativeGrade2 + summativeGrade3) / 3);
  const finalGrade = calculateFinalGrade(classParticipationGrade, summativeAverage, finalExamGrade);
  const letterGrade = calculateLetterGrade(finalGrade);

  classParticipationGrades.push(classParticipationGrade);
  summativeGrades.push(summativeAverage);
  finalExamGrades.push(finalExamGrade);
  finalGrades.push(finalGrade);
  letterGrades.push(letterGrade);
}

function createTableRow(...columns) {
  const row = columns.map(column => column.toString().padEnd(20)).join(' | ');
  return row;
}


console.log("Name\t\tClass Participation\tSummative Grade\tExam Grade\tGrade Score\tLetter Grade");


for (let i = 0; i < students; i++) {
  const row = createTableRow(
    names[i],
    classParticipationGrades[i],
    summativeGrades[i],
    finalExamGrades[i],
    finalGrades[i],
    letterGrades[i]
  );
  console.log("-------------------------------------------------------------------------------------------------------------------------------------");

  console.log(row);
}
