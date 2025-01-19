function demo(name: string, cb: (text:string) => void): void {
    cb(name);
}

demo("sayaji", (text:string) => {
    console.log(text);
})