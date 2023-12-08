function isPalindromic(str:string):boolean{
    if(str.length === 1)
        return true;
    return  str.split("").reverse().join("") === str ;
}

console.log(isPalindromic("madam"));
console.log(isPalindromic("a"));
console.log(isPalindromic("sayaji"));