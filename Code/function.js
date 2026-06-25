"use strict";

// 1. Changed mass and height to be direct properties (numbers), not functions.
const Mark = {
    fullname: "Mark Miller",
    mass: 78, 
    height: 1.69,
    calcBMI: function() {
        // We can also save the result to a property if we want to use it later!
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi;
    }
};

const John = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// 2. The function now accepts the whole OBJECTS, not just the BMI numbers.
const print = function(person1, person2) {
    // Calculate the BMIs first
    let bmi1 = person1.calcBMI();
    let bmi2 = person2.calcBMI();

    // 3. Fixed the else if condition to check if person2 is greater.
    // 4. Fixed the template literal syntax to use dot notation (.fullname).
    if (bmi1 > bmi2) {
        console.log(`${person1.fullname}'s BMI (${bmi1}) is higher than ${person2.fullname}'s (${bmi2})!`);
    } else if (bmi2 > bmi1) {
        console.log(`${person2.fullname}'s BMI (${bmi2}) is higher than ${person1.fullname}'s (${bmi1})!`);
    } else {
        console.log("It's a draw!");
    }
};

// Pass the objects into the function
print(Mark, John);