console.log("hello javascript".toUpperCase());
console.log("hello javascript".toLowerCase()); //  hello javascript

console.log("hello javascript".charAt(4)); //l
console.log("hello javascript".charCodeAt(4)); //108


console.log("hello javascript".concat(" programming")); //hello javascript programming
console.log("hello javascript".includes('hello'));  //true
console.log("hello javascript".includes("l"));//true
console.log("hello javascript".includes("L")); //false

console.log("hello javascript".startsWith("h")); //true
console.log("hello javascript".endsWith("h")); //false

console.log(String.fromCharCode(97, 98, 99)); //abc
console.log("hello javascript".indexOf('a')); // 7
console.log("hello javascript".lastIndexOf('a')); //9
console.log("hello he js".match(/he/g)); //[ 'he', 'he' ]

console.log("hello javascript".padStart(25, "#")); //#########hello javascript
console.log("hello javascript".padEnd(25, "$")); //hello javascript$$$$$$$$$

console.log("hello javascript".repeat(2)); //hello javascripthello javascript
console.log("hello javascript".replace("hello", "HELLO"));//HELLO javascript
console.log("hello javascript".replaceAll("a", "@")); //hello j@v@script

console.log("hello javascript".search("Hello")); //-1
console.log("hello javascript".search("hello")); //0
console.log("hello javascript".slice(0, 5)); //hello
console.log("hello worlds".slice(5, 0)); //nothing present
console.log("hello worlds".slice(-5, -1)); //orld
console.log("hello worlds".substring(6)); //worlds
console.log("hello worlds".substring(0, 5));//hello
console.log("hello worlds".substring(5, 0)); //hello
console.log("hello worlds".split(" "));//[ 'hello', 'worlds' ]
console.log("  hello javascript   ".trim());//hello javascript
console.log("   hello javascript  ".trimStart());//"hello javascript   "
console.log("   hello javascript  ".trimEnd());//"   hello javascript"
console.log("  hello javascript".trimLeft());//"hello javascript   "
console.log("hello javascript".trimRight());//"  hello javascript"
console.log("hello javascript".valueOf());//hello javascript
console.log("hello javascript".toLocaleLowerCase());//"hello javascript"
console.log("hello javascript".toLocaleUpperCase());




