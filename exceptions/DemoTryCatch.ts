function demo() {
    try {
        const num = 10;
        if (num > 5) {
            throw new Error("Number is too large!");
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error caught:", error.message);
        }
    }
}

demo();

console.log("end of program")