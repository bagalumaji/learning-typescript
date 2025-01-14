console.log("hello typescript".length);//16
console.log("hello typescript".toUpperCase());
console.log("hello typescript".toLowerCase()); //  hello typescript

console.log("hello typescript".charAt(4)); //l
console.log("hello typescript".charCodeAt(4)); //108


console.log("hello typescript".concat(" programming")); //hello typescript programming
console.log("hello typescript".includes('hello'));  //true
console.log("hello typescript".includes("l"));//true
console.log("hello typescript".includes("L")); //false

console.log("hello typescript".startsWith("h")); //true
console.log("hello typescript".endsWith("h")); //false

console.log(String.fromCharCode(97, 98, 99)); //abc
console.log("hello typescript".indexOf('a')); // 7
console.log("hello typescript".lastIndexOf('a')); //9
console.log("hello he js".match(/he/g)); //[ 'he', 'he' ]

console.log("hello typescript".padStart(25, "#")); //#########hello typescript
console.log("hello typescript".padEnd(25, "$")); //hello typescript$$$$$$$$$

console.log("hello typescript".repeat(2)); //hello typescripthello typescript
console.log("hello typescript".replace("hello", "HELLO"));//HELLO typescript
console.log("hello typescript".replaceAll("s", "$")); //hello type$cript

console.log("hello typescript".search("Hello")); //-1
console.log("hello typescript".search("hello")); //0
console.log("hello typescript".slice(0, 5)); //hello
console.log("hello worlds".slice(5, 0)); //nothing present
console.log("hello worlds".slice(-5, -1)); //orld
console.log("hello worlds".substring(6)); //worlds
console.log("hello worlds".substring(0, 5));//hello
console.log("hello worlds".substring(5, 0)); //hello
console.log("hello worlds".split(" "));//[ 'hello', 'worlds' ]
console.log("  hello typescript   ".trim());//hello typescript
console.log("   hello typescript  ".trimStart());//"hello typescript   "
console.log("   hello typescript  ".trimEnd());//"   hello typescript"
console.log("  hello typescript".trimLeft());//"hello typescript   "
console.log("hello typescript".trimRight());//"  hello typescript"
console.log("hello typescript".valueOf());//hello typescript
console.log("hello typescript".toLocaleLowerCase());//"hello typescript"
console.log("hello typescript".toLocaleUpperCase());




