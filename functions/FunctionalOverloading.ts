function demo(): void;
function demo(a: number): void;

function demo(a?:number):void {
    if(a === undefined){
        console.log("hey")
    }else if(typeof a === "number"){
        console.log(a);
    }else throw new Error(`${a} is not a number`);

}
demo(11)