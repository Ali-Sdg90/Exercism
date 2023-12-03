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
                    console.log(this.students[key][value] + " got deleted!");
                    this.students[key].splice(value, 1);
                    return;
                }
            }
        }

        if (this.students[gradeNumber]) {
            this.students[gradeNumber].push(name);
        } else {
            this.students[gradeNumber] = [];
            this.students[gradeNumber].push(name);
        }

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
