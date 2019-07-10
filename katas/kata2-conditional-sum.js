const conditionalSum = (values, condition) => {

    if (condition === "even"){
        return evenSum(values);
    } else if (condition === "odd") {
        return oddSum(values);
    }

    //takes an array as input and returns the sum of all even numbers
    function evenSum(values){
        var sum = 0;
        for (var i = 0; i < values.length; i++) {
            if (values[i] % 2 === 0) {
                sum += values[i];
            }
        } 
        return sum;  
    }

    //takes and array and returns the sum of all odd numbers
    function oddSum(values){
        var sum = 0;
        for (var i = 0; i < values.length; i++) {
            if (values[i] % 2 === 1) {
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
