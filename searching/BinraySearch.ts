
function searchByUsingBinarySearch(val:number,values:number[]):boolean {
    let begin:number = 0;
    let end: number = values.length - 1;
    let mid: number;
    let result:boolean = false;
    while (begin <= end) {
        mid = Math.floor((begin + end) / 2);
        // console.log("mid : " + mid);
        // console.log("begin : " + begin);
        // console.log("eng : " + end);
        // console.log("value : " + values[mid])
        if (val == values[mid]) {
            result= true;
            break;
        }

        if (val < values[mid]) {
            end = mid - 1;
        } else {
            begin = mid + 1;
        }

    }
    return result;
}

let values:number[]=[1,2,3,4,5,6,7,8,9,10];
const val:number=4;
const result = searchByUsingBinarySearch(val,values)?`${val} found`:` ${val} not found`;
console.log(result);