function enterNames() {
    let n = prompt("რამდენი სახელის შეყვანა გსურთ?");
    let names = [];

    for (let i = 0; i < n; i++) {
        let name = prompt("შეიყვანეთ სახელი: ");
        names.push(name);
    }

    return names;
}

console.log(enterNames().sort());