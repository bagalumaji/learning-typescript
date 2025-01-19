abstract class AbstractsDemo {
    constructor(public name: string) {
    }
}

class Demo extends AbstractsDemo {
    constructor(public name: string) {
        super(name);
    }
    print() {
        console.log("hello")
    }
}

const u1 = new Demo("sharu");
u1.print();