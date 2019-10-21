function filterNames() {
    let names = [];
    let toCompare = prompt("შეიყვანეთ სტრიქონი: ");
    let n = prompt("რამდენი სახელის შეყვანა გსურთ?");

    for (let i = 0; i < n; i++) {
        let name = prompt("შეიყვანეთ სახელი: ");
        if (toCompare.includes(name)) {
            names.push(name);
        }
    }

    return names;
}

console.log(filterNames());