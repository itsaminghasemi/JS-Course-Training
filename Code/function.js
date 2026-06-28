"use strict";

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// const calTip = function () {
//     // Use a standard for loop so we have an index (i)
//     for (let i = 0; i < bills.length; i++) {
//         let bill = bills[i];
//         let tip;

//         // ✅ FIX 2: Corrected the condition (between 50 and 300)
//         if (bill >= 50 && bill <= 300) {
//             tip = bill * (15 / 100);
//         } else {
//             tip = bill * (20 / 100);
//         }

//         // ✅ FIX 1 & 3: Push the calculated values directly into the arrays
//         tips.push(tip);
//         totals.push(bill + tip); 
//     }

//     console.log("Tips:", tips);
//     console.log("Totals:", totals);
// }

// calTip();

const valuable = function(value){
    if (value > 100) console.log(`${value} is good; thank you for your support!`);
    else console.log(`noooo! ${value} is not good; but thank you for your support!`)
}

valuable(456);