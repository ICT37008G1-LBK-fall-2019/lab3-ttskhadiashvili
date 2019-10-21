function checkText(text, forbiddenWords) {
    for (let word of forbiddenWords) {
        if (text.indexOf(word) != -1) {
            return "შეიცავს აკრძალულ სიტყვებს";
        }
    }
    return "არ შეიცავს აკრძალულ სიტყვებს";
}

let forbidden = ["რეკლამა", "მარკეტინგი", "ვირუსი"];
let text1 = "უაზრო რეკლამა";
let text2 = "ტექსტი აკრძალული სიტყვების გარეშე";


console.log(checkText(text1, forbidden));
console.log(checkText(text2, forbidden));