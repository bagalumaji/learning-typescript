class Demo {
    public print(): void {
        console.log("hello");
    }

    display(): void {
        console.log("hello from display");
    }
}

const demo = new Demo();
demo.print();
demo.display();