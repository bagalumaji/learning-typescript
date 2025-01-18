class Person {
    protected name: string;
    protected email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
    public printDetails(){
        console.log(`Hello ${this.name} ${this.email}`);
    }
}
class Employee  extends Person {
    private id: number;
    constructor(id:number,name:string,email:string) {
        super(name,email);
        this.id=id;
    }
    public printDetails() {
        super.printDetails();
        console.log(this.id);
        console.log(`Hello ${this.name} ${this.email}`);
    }
}
const  emp = new Employee(1,"sayaji","sayajibagal@gmail.com");
emp.printDetails()