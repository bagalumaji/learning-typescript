class A1 {
    print() {
        console.log("print");
    }

}

class B extends A1 {
    show() {
        console.log("show");
    }
}

class C extends B {
    display() {
        console.log("display");
    }
}

const c = new C();
c.show();
c.print();
c.display();
