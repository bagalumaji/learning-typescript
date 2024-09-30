const arr=['abc','hi','hello','js'];
const findIndex = arr.findIndex(a => a.length>=2);
console.log(findIndex);
console.log(arr.find(s => s.length >= 2));

const values=[1,2,3,4,5];

const sum = values.reduce((a,s)=>a+s,0);
console.log(sum);

const reduceRight = values.reduceRight((a,s)=>a+s,0);
console.log(reduceRight);

//foreach
values.forEach(val=>console.log(val));

//filter
const vals = values.filter(v=>v%2==0);
console.log(vals);

// map
const v1 = values.map(v=>v+10);
console.log(v1);