let calc = function (num1, num2) {
    let sum = num1 + num2;
    console.log(sum);

}

calc(9, 34);

let doingStaff = (x) => console.log(x);
doingStaff("I love programming");

//spread operator

let spread = ["so", "much", "fun", "really"];
let message = ["java script", "is", ...spread, "and", "very", "powerful"];
console.log(message);


let sumOf = (x, y) => {
    console.log(x + y);
}
let arr = [78, 22];
sumOf(...arr);

//rest parameter
let restParameter = (...x) => {
    console.log(x)
}

restParameter("peter", "simon", "joseph");

// let prompTing = () => {
//     let favoriteSubject = prompt("What is your favorite subject?");
//     console.log(favoriteSubject)
// }
// //console.log(prompTing());
// prompTing();

let factorialNumbers = (n) => {
    if (n == 0) {
        return 1
    }
    return n * factorialNumbers(n - 1);

}

console.log(factorialNumbers(10));

let fibSeq = (n) => {
    if (n <= 1)
        return 1
    return fibSeq(n - 1) + fibSeq(n - 2);
}

console.log(fibSeq(20));

function Dog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}
let dog = new Dog("javaScript", 2.4, "brown", "chihuahua");
console.log(dog.breed)

class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}



