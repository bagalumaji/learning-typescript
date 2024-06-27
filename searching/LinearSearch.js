var numbers = [2, 1, 4, 5, 3, 7, 6];
var searchValue = 16;
var f = false;
for (var i = 0; i < numbers.length; i++) {
    if (searchValue === numbers[i]) {
        f = true;
        break;
    }
}
if (f) {
    console.log("found the value in arrays : " + searchValue);
}
else {
    console.log("".concat(searchValue, " is not found in array"));
}
