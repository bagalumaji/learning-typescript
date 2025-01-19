class Demo1{
    // private id:number;
    // private name:string;
    // constructor(name:string,id:number) {
    //     this.name=name;
    //     this.id=id;
    // }

    // parameter properties
    constructor(private id:number,private name:string,private email:string) {
    }
    public print(){
        console.log(`${this.id} ${this.name} ${this.email} ${this.name}`);
    }
}

const  u1 =new Demo1(1,"sayaji","sharu@gmail.com");
u1.print();