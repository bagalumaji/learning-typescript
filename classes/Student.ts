// @ts-ignore

class Student {
    private name: string;
    private email: string;
    private age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getEmail(): string {
        return this.email;
    }
    public displayDetails():void{
        console.log(`Name : ${this.getName()} , Email : ${this.getEmail()} and Age : ${this.getAge()}`);
    }
}

const student  = new Student("sayaji","sayajirajebagal@gmail.com",14);
const student1  = new Student("sharu","sharannyabagal@gmail.com",12);
student1.displayDetails();
student.displayDetails();
