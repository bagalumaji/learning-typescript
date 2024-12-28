function separateEvenOddNumbers(arr: number[]): void {
    let ep = 0;
    let op = arr.length - 1;

    while (ep < op) {
        if (arr[ep] % 2 === 0) {
            ep++;
        }
        if (arr[op] % 2 === 1) {
            op--;
        }
        if (arr[ep] % 2 === 1 && arr[op] % 2 === 0 && ep<op) {
            let t = arr[op];
            arr[op] = arr[ep];
            arr[ep] = t;
        }
    }

    console.log(arr);

}

separateEvenOddNumbers([1, 2, 3, 4, 5]);