function isPrime(num: number): boolean {
    let result: boolean = true;
    for (let i= 2; i < num; i++) {
        if (num % i == 0) {
            result = false;
        }
    }
    return result;
}

console.log(isPrime(5));