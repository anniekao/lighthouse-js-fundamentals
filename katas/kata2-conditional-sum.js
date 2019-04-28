const conditionalSum = function (values, condition) {
    let sum = 0;

    if (condition == "even"){
        for (var i = 0; i < values.length; i++){
            if (values[i] % 2 == 0) {
                sum += values[i];
            }
        }
        return sum;
    } else if (condition == "odd") {
        for (var i = 0; i < values.length; i++) {
            if (values[i] % 2 == 1) {
                sum += values[i];
            }
        }
        return sum;
    }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // => 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));  // => 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // => 144
console.log(conditionalSum([], "odd")); // => 0
