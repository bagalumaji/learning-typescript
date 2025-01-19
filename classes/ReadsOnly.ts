class Demo{
    constructor(public readonly id:number) {
    }
    public print(){
        console.log(this.id);
    }
}

const u1 = new Demo(1);
u1.print();
// u1.id=11;
