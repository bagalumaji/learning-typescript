class Abc {
    show() {
        console.log("show from Abc")
    }
}

class Pqr extends Abc {
}

class Xyz extends Abc {
}

const pqr = new Pqr();
const xyz = new Xyz();
xyz.show();
pqr.show();