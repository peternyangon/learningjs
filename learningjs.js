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

