class StaticDemo{
    static id:number=1;
    static printDetails():void{
        console.log(`id : ${this.id}`);
    }
}
StaticDemo.printDetails();
console.log(StaticDemo.id);

