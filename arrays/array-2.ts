const arr=['abc','hi','hello','js'];
const findIndex = arr.findIndex(a => a.length>=2);
console.log(findIndex);
console.log(arr.find(s => s.length >= 2));