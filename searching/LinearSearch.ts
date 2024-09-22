
let numbers:number[]=[2,1,4,5,3,7,6];
let searchValue:number=16;
let f=false;

for(let i=0;i<numbers.length;i++){
    if(searchValue === numbers[i]){
        f=true;
        break;
    }
}
if(f){
    console.log("found the value in arrays : "+searchValue);
}else{
    console.log(`${searchValue} is not found in array`);
}