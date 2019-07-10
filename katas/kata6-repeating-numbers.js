let repeatNumbers = (data) => {
    var repeatStr = "";
    for (var i = 0; i < data.length; i++){
        var toStr = data[i][0].toString();
        repeatStr += toStr.repeat(data[i][1]) + ", "; 
    }
    return repeatStr.substring(0, repeatStr.length-2);
};

console.log(repeatNumbers([
    [1, 10]
]));
console.log(repeatNumbers([
    [1, 2],
    [2, 3]
]));
console.log(repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
]));

