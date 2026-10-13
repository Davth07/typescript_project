"use strict";
let students = [
    {
        id: 101,
        firstName: "Alice",
        lastName: "Smith",
        age: 19, //Attempted to change Alice's age to "nineteen" instead of 19. Error message: "Type 'string' is not assignable to type 'number'." I changed back to 19.
        isActive: true,
        studyPoints: 80,
    },
    {
        id: 102,
        firstName: "Bob",
        lastName: "Jones",
        age: 20,
        isActive: false, // Attempted to remove Bob's isActive. Error message: "Property 'isActive' is missing in type '{ id: number; firstName: string; lastName: string; age: number; studyPoints: number; }' but required in type 'Student'." Property is necessary and therefore a error. I added it back.
        studyPoints: 55,
    },
    {
        id: 103,
        firstName: "Charlie",
        lastName: "Brown",
        age: 18,
        isActive: true,
        studyPoints: 95, // attempted to write "excellent" instead. Once again: "Type 'string' is not assignable to type 'number'." You can not assign a string value to a property with the type of number. I changed it back to 95.
    },
    {
        id: 104,
        firstName: "Diana",
        lastName: "Lee",
        age: 21,
        isActive: true,
        studyPoints: 70,
    },
];
console.log(students[0].firstName, students[0].lastName);
// console.log(students[-1].id); type error
console.log(students[students.length - 1].id);
console.log(students[0]["age"]);
students.push({
    id: 105,
    firstName: "David",
    lastName: "Thörnqvist",
    age: 19,
    isActive: true,
    studyPoints: 95,
});
students[1].studyPoints = 65;
students[2].lastName = "Wilson";
let active = 0;
let notActive = 0;
let total = 0;
let totalStudyPointsActive = 0;
for (let i = 0; i < students.length; i++) {
    console.log(students[i].id, students[i].firstName, students[i].lastName);
    if (students[i].isActive) {
        active = active + 1;
        totalStudyPointsActive = totalStudyPointsActive + students[i].studyPoints;
    }
    else {
        notActive = notActive + 1;
    }
    total += students[i].age;
}
console.log("Active amount:", active);
console.log("Not active amount:", notActive);
console.log("Total age:", total);
console.log("Average age:", total / students.length);
console.log("Average studypoints for active students:", totalStudyPointsActive / active);
let highestPoint = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].studyPoints >= 80) {
        console.log("Students with above 80 points:", students[i].firstName, students[i].lastName);
    }
    if (students[i].studyPoints > highestPoint) {
        highestPoint = students[i].studyPoints;
    }
}
for (let i = 0; i < students.length; i++) {
    if (students[i].studyPoints == highestPoint) {
        console.log("Highest Study points:", students[i].firstName, students[i].lastName);
    }
}
for (let i = 0; i < students.length; i++) {
    if (students[i].id === 103) {
        console.log("ID 103:", students[i].firstName, students[i].lastName);
    }
}
let hittad = false;
for (let i = 0; i < students.length; i++) {
    if (students[i].id === 999) {
        console.log("ID: 999", students[i].firstName, students[i].lastName);
        hittad = true;
    }
}
if (!hittad) {
    console.log("ID: 999 Not found.");
}
const newStudent = {
    id: 106,
    firstName: "Hugo",
    lastName: "Nyberg",
    age: 19,
    isActive: false,
    studyPoints: 80,
};
let idExists = false;
for (let i = 0; i < students.length; i++) {
    if (students[i].id == newStudent.id) {
        idExists = true;
    }
}
if (idExists) {
    console.log("New student has same ID as existing student.");
}
else {
    students.push(newStudent);
    console.log(students);
}
for (let i = 0; i < students.length; i++) {
    if (students[i].age < 0) {
        console.log(`Student ${(students[i].firstName, students[i].lastName)} has a faulty age. (${students[i].age})`);
    }
    if (students[i].studyPoints > 100 || students[i].age < 0) {
        console.log(`Student ${(students[i].firstName, students[i].lastName)} has faulty study points. (${students[i].studyPoints})`);
    }
}
// no result from "npx tsc --noEmit registry.ts" after correcting deliberate errors.
