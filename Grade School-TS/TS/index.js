class GradeSchool {
    constructor() {
        this.students = {};
    }

    sorter() {
        const keys = Object.keys(this.students);
        keys.sort((a, b) => a - b);

        const copyOfStudents = this.students;
        this.students = {};

        for (let i = 0; i < keys.length; i++) {
            this.students[keys[i]] = copyOfStudents[keys[i]];
            this.students[keys[i]].sort();
        }
    }

    roster() {
        const copyOfStudents = {};
        for (let key in this.students) {
            copyOfStudents[key] = [...this.students[key]];
        }
        return copyOfStudents;
    }

    add(name, gradeNumber) {
        for (let key in this.students) {
            for (let value = 0; value < this.students[key].length; value++) {
                if (this.students[key][value] === name) {
                    // console.log(this.students[key][value] + " got deleted!");
                    this.students[key].splice(value, 1);
                    return;
                }
            }
        }

        if (!this.students[gradeNumber]) {
            this.students[gradeNumber] = [];
        }
        this.students[gradeNumber].push(name);

        this.sorter();
    }

    grade(gradeNumber) {
        if (!this.students[gradeNumber]) {
            return [];
        }

        // Create copy of array and can not add "Oops!"!!!!
        return [...this.students[gradeNumber]];
    }
}

let expectedDb = "";
let school = {};

// console.log(JSON.stringify(school.grade(5)));
// console.log(JSON.stringify(school.roster()));
// console.log(JSON.stringify(expectedDb));

// -----------------------------------
school = new GradeSchool();

school.add("Blair", 2);
school.add("James", 2);
school.add("Paul", 2);

expectedDb = { 2: ["Blair", "James", "Paul"] };
console.log(
    "1.",
    JSON.stringify(school.roster()) === JSON.stringify(expectedDb)
);

// -----------------------------------

school = new GradeSchool();

school.add("Chelsea", 3);
school.add("Logan", 7);

expectedDb = { 3: ["Chelsea"], 7: ["Logan"] };
console.log(
    "2.",
    JSON.stringify(school.roster()) === JSON.stringify(expectedDb)
);

// -----------------------------------

school = new GradeSchool();

school.add("Franklin", 5);
school.add("Bradley", 5);
school.add("Jeff", 1);

expectedDb = ["Bradley", "Franklin"];
console.log(
    "3.",
    JSON.stringify(school.grade(5)) === JSON.stringify(expectedDb)
);

// -----------------------------------

school = new GradeSchool();

school.add("Jennifer", 4);
school.add("Kareem", 6);
school.add("Christopher", 4);
school.add("Kyle", 3);

expectedDb = {
    3: ["Kyle"],
    4: ["Christopher", "Jennifer"],
    6: ["Kareem"],
};
console.log(
    "4.",
    JSON.stringify(school.roster()) === JSON.stringify(expectedDb)
);

// -----------------------------------

school = new GradeSchool();

school.add("Aimee", 2);
const roster = school.roster();
roster[2].push("Oops.");

expectedDb = { 2: ["Aimee"] };
console.log(
    "5.",
    JSON.stringify(school.roster()) === JSON.stringify(expectedDb)
);

// -----------------------------------

school = new GradeSchool();

school.add("Aimee", 2);
school.grade(2).push("Oops.");

expectedDb = { 2: ["Aimee"] };
console.log(
    "6.",
    JSON.stringify(school.roster()) === JSON.stringify(expectedDb)
);

// -----------------------------------

school = new GradeSchool();

school.add("Aimee", 2);
school.add("Aimee", 1);

expectedDb = [];
console.log(
    "7.",
    JSON.stringify(school.grade(2)) === JSON.stringify(expectedDb)
);

// -----------------------------------

school = new GradeSchool();

let inputCodes = `
school.add("Aimee", 2);
school.grade(2).push("Oops.");
school.add("Aimee", 1);
school.add("Jennifer", 4);
school.add("Kareem", 6);
school.add("Christopher", 4);
school.add("Kyle", 2);
`;

const input = document.getElementById("input-text");
const output = document.getElementById("output");

input.value = inputCodes;

eval(inputCodes);

console.log(JSON.stringify(school.roster(), null, 2));
output.value = JSON.stringify(school.roster(), null, 2);

document.getElementById("form").addEventListener("submit", () => {
    school = new GradeSchool();
    eval(input.value);

    console.log(JSON.stringify(school.roster(), null, 2));
    output.value = JSON.stringify(school.roster(), null, 2);
});
