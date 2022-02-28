//Author: Cecilia Michel Puente
// Created: February 24, 2022
//License: Public Domain

var ageNumber = [1,3,13,88,67,53,4.5]
undefined
function ageNumber(x){
    return (x*2);
}
undefined
ageNumber(2)
4
ageNumber(4)
8
console.log("Is my age odd?", ageNumber(1));

undefined
array
(9) [89, 67, 73, 45, 23.3, 3.5, 7, 1, 0]
array.map(ageNumber);
(9) [178, 134, 146, 90, 46.6, 7, 14, 2, 0]
array.map(function(x){
    return x + 5;
})
(9) [94, 72, 78, 50, 28.3, 8.5, 12, 6, 5]


function main() {
    document.writeln("Here's your age: " + ageNumber + "</br></br>");


}

main();
