class A {
    print(): void {
        console.log("Hello World from print - A");
    }
}

class B extends A {
    display(): void {
        console.log("Hello World from display - B");
    }
}

const b = new B();
b.print();
b.display();
