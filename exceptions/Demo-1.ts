function demo() {
    try {
        let count = 0;
        let res = count / 0;
        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
}

demo();