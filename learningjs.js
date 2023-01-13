

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

// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

//The new word is what tell javaScript to look for the special constructor function in the Person class and create a new object.
//The Constructor get called and returns an instance of the person object with the specified properties.
//This object gets stored in ths p variable.

//in class we can specified functions. This means that our object can start doing things the object's properties-for example printing a name.
//Functions on a class are called methods. When defining these methods we don't use the function keyword.we start directly with name.

class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    greet() {
        console.log("Hi there! I'm", this.firstName);
    }
}

let p = new Person("Peter", "Nyangon");
p.greet()

//Switch statement in js as a decision structure
let switchStatement = function (grade) {
    switch (grade) {
        case "A":
            console.log("you have passed with flying colors");
            console.log("This is the best grade ever in my class")
            console.log("You must have studied hard for this course")
            break;
        case "B":
            console.log("you have excelled in this course my good student");
            break;

        case "C":
            console.log("You have passed the course");
            break;

        default:
            console.log("You have failed the course");
            break;
    }
}

switchStatement("A");

// let number;
// do {
//     number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));


// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }
// }

// let p = new Person("Maaike", "van Putten");
// p.greet();

