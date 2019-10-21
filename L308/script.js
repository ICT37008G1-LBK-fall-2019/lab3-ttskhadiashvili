function enterNames() {
    let n = prompt("რამდენი სახელის შეყვანა გსურთ?");
    let names = [];

    for (let i = 0; i < n; i++) {
        let name = prompt("შეიყვანეთ სახელი: ");
        names.push(name);
    }

    return names;
};

function reverseOrder(list) {
    let reversedList = [];

    for (let i = 0; i < list.length; i++) {
        reversedList.unshift(list[i]);
    }

    return reversedList;
};

let studentNames = enterNames();

console.log(reverseOrder(studentNames));