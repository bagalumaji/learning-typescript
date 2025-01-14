
const str="hello world";
//print len of string
console.log(str.length);

//string to upper case
console.log(str.toUpperCase());

//string to lower case
console.log(str.toLowerCase())


// @ts-ignore
console.log(str.includes("hello"));

console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));
console.log(str.concat(" of TS"));
console.log(str.charAt(9));
console.log(str.charCodeAt(3));
console.log(str.substring(0));
console.log(str.substring(0, 5));
console.log(str.replace("l", "L"));

// @ts-ignore
console.log(str.replaceAll("l", "L"));
