function shorten(text) {
    if (text.length > 15) {
        return text.substring(0, 10) + "...";
    }
    return text;
}

let text1 = "Some very long text";
let text2 = "Some short text";

console.log(shorten(text1));
console.log(shorten(text2));