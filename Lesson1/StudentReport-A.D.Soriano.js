//class
class Student {
    constructor (name, scores) {
        this.name = name;
        this.scores = scores;
    }

    // average method
    getAverage() {
    let total = 0;
        for (let i = 0; i <this.scores.length; i++) {
            total += this.scores[i];
        }
        return total / this.scores.length;
    }
    
    // grade method
    getLetterGrade() {
        const average = this.getAverage();
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

// student data
const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

//student instances
const students = [];

for (let i = 0; i < studentData.length; i++) {
    const stud = new Student(
        studentData[i].name,
        studentData[i].scores
    );
    students.push(stud);
}

// analyze 
function analyzeClass(students) {
    let classTotal = 0;
    let topStudent = students[0];

    console.log("------ Student Report ------");

    for (let i = 0; i < students.length; i++) {

        const ave = students[i].getAverage();
        const grade = students[i].getLetterGrade();

        console.log(`${students[i].name} - Average: ${ave.toFixed(1)} | Grade: ${grade}`);
    
        classTotal += ave;

        if (ave > topStudent.getAverage()) {
        topStudent = students[i];
    }
    }
    const ClassAve = classTotal / students.length;
    
    console.log("----------------------------");

    console.log(`Class Average: ${ClassAve.toFixed(1)}`);
    console.log(`Top Student: ${topStudent.name} with ${topStudent.getAverage().toFixed(1)}`);

}

analyzeClass(students);
