
function printDuplicateAndMissingNumber(arr:number[]):void{

    let i:number=0;

    while (i<arr.length){
        if(arr[i]!==arr[arr[i]-1]){
            let temp = arr[i];
            arr[i] = arr[temp-1];
            arr[temp-1] = temp;
        }else {
            i++;
        }
    }
    console.log(arr);
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]!=j+1){
            console.log("missing number : ",j+1);
            console.log("duplicate number : ",arr[j]);
        }
    }


}
const arr:number[]=[2,1,3,5,2];

printDuplicateAndMissingNumber(arr);