function join(words) {
    let result = words[0];
    let minimumoverlap;

    for (let i = 0; i < words.length - 1; i++) {
        currentword = words[i];
        nextword = words[i + 1];
        currentwordlength = currentword.length;
        nextwordlength = nextword.length;
        minlength = currentwordlength > nextwordlength ? nextwordlength : currentwordlength;
        let overlap = 100;
        let minoverlap = 100;

        for (let j = 0; j < minlength; j++) {
            current = currentword.slice(currentwordlength - j - 1, currentwordlength + 1);
            next = nextword.slice(0, j + 1);
            if (current == next) {
                overlap = j + 1;
            }
            minoverlap=Math.min(minoverlap,overlap)
        }
        if (overlap > 0 && overlap != 100) {
            minimumoverlap = minoverlap;
            result += nextword.slice(overlap, nextwordlength);
        }
        else {
            minimumoverlap = 0;
            result += nextword;
        }
    }
    return [result, minimumoverlap];
}

console.log(join(["aaa", "bbb", "ccc", "ddd"]));