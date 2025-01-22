const str = "hello typescript";
console.log(str.split("").reverse().join(''));

let reverseString: string = '';
for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
}
console.log(reverseString);