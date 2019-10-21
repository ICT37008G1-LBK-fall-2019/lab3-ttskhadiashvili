function currencyConvertor(value) {
    let amount = value.substring(1, value.length);

    if (value.includes("$")) {
        return 'L'.concat((amount * 2.6).toFixed(2));
    }
    else if (value.includes("L")) {
        return '$'.concat((amount / 2.6).toFixed(2));
    }
    else
        return "Unknown currency";
}

console.log(currencyConvertor("$10"));
console.log(currencyConvertor("L10"));