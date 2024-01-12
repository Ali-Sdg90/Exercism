interface GradeSchoolTypeTest {
    sorter(): void;
    roster(): StudentsTypeTest;
    add(name: string, gradeNumber: number): void;
    grade(gradeNumber: number): string[];
}

interface StudentsTypeTest {
    [key: number]: string[];
}

export class GradeSchoolTest implements GradeSchoolTypeTest {
    students: StudentsTypeTest;

    constructor() {
        this.students = {};
    }

    sorter() {
        const keys: string[] = Object.keys(this.students);

        keys.sort(
            (a, b): number =>
                (typeof a === "number" ? a : Number(a)) -
                (typeof b === "number" ? b : Number(b))
        );

        const copyOfStudents: StudentsTypeTest = this.students;
        this.students = {};

        for (let i = 0; i < keys.length; i++) {
            this.students[+keys[i]] = copyOfStudents[+keys[i]];
            this.students[+keys[i]].sort();
        }
    }

    roster() {
        const copyOfStudents: StudentsTypeTest = {};
        for (let key in this.students) {
            copyOfStudents[key] = [...this.students[key]];
        }
        return copyOfStudents;
    }

    add(name: string, gradeNumber: number) {
        for (let key in this.students) {
            for (
                let value: number = 0;
                value < this.students[key].length;
                value++
            ) {
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

    grade(gradeNumber: number) {
        if (!this.students[gradeNumber]) {
            return [];
        }

        return [...this.students[gradeNumber]];
    }
}
