function reverseVowels(str: string): void {
    const charArray: string[] = str.split("")
    let lp = 0;
    let rp = str.length - 1;
    const vowels: string = 'aeiou';
    while (lp < rp) {
        // @ts-ignore
        if (vowels.includes(charArray[lp]) && vowels.includes(charArray[rp])) {
            let t = charArray[lp];
            charArray[lp] = charArray[rp];
            charArray[rp] = t;
            lp++;
            rp--;
        } else { // @ts-ignore
            if (!(vowels.includes(charArray[lp]))) {
                lp++;
            } else { // @ts-ignore
                if (!(vowels.includes(charArray[rp]))) {
                    rp--;
                }
            }
        }
    }

    console.log(charArray);

}

reverseVowels("sharu")