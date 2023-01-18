import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const runAnimation = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
};

async function welcome() {
    let animation = chalkAnimation.rainbow("Welcome to Student Management System");
    await runAnimation();

    animation.stop();
};

await welcome();

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
};

class Student extends Person {
    rollNumber: string;
    courses: string[] = [];

    constructor(name: string, age: number, rollNumber: string) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    registerForCourses(course: string) {
        return this.courses.push(course);
    }
};

class Instructor extends Person {
    salary: number;
    courses: string[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    assignCourse(course: string) {
        return this.courses.push(course);
    }
};

class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor!: Instructor;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student: Student) {
        return this.students.push(student);
    }

    setInstructor(instructor: Instructor) {
        return this.instructor = instructor;
    }
};

const student1 = new Student("Ahmed", 22, "1234");

const student2 = new Student("Hamzah", 22, "5678");

const instructor1 = new Instructor("Zia", 60, 100000000);

const instructor2 = new Instructor("Adil", 30, 10000000);

const course1 = new Course("Course 1", "CNC");
course1.addStudent(student1);
course1.addStudent(student2);

console.log(course1.students);

const course2 = new Course("Course 2", "Web 3");

// class Department {
//     name: string;
//     course: string[] = [];

//     constructor(name: string, course: string[]) {
//         this.name = name;
//         this.course = course;
//     }

//     addCourse() { }
// };