let values=[1,2,3,4,5,6,7,8,9,10];
let begin=0;
let end = values.length-1;
let mid:number;
let val=4;
let f=false;
while(begin<=end){
    mid = Math.floor((begin+end)/2);
    console.log("mid : "+mid);
    console.log("begin : "+begin);
    console.log("eng : "+end);
    console.log("value : "+values[mid])
    if(val == values[mid]){
        f=true;
        break;
    }

    if(val<values[mid]){
        end=mid-1;
    }else{
        begin=mid+1;
    }

}
if(f){
    console.log("found the value");
}else{
    console.log("not found the value");
}