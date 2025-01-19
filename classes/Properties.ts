class StudentProperties {
    constructor(private _id: number, private _name: string) {
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    public printDetails(){
        console.log(`${this.name} ${this.id}`);
    }
}

const u1 = new StudentProperties(1,"sayaji");
u1.printDetails();
u1.id=100;
u1.name= "Sayaji";
u1.printDetails()