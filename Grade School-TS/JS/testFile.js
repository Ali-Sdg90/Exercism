"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeSchoolTest = void 0;
class GradeSchoolTest {
    constructor() {
        this.students = {};
    }
    sorter() {
        const keys = Object.keys(this.students);
        keys.sort((a, b) => (typeof a === "number" ? a : Number(a)) -
            (typeof b === "number" ? b : Number(b)));
        const copyOfStudents = this.students;
        this.students = {};
        for (let i = 0; i < keys.length; i++) {
            this.students[+keys[i]] = copyOfStudents[+keys[i]];
            this.students[+keys[i]].sort();
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
        return [...this.students[gradeNumber]];
    }
}
exports.GradeSchoolTest = GradeSchoolTest;
//# sourceMappingURL=testFile.js.map