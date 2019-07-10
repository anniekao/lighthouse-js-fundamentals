const multiplicationTable = (maxValue) => {
    var rowArray = [];
    var rowCount = 1;
    var n = 0;
    var output = "";
    while (n < maxValue){
        for (var i = 0; i < maxValue * rowCount; i += rowCount) {
            rowArray.push(i + rowCount);
        }
        output += rowArray.join(' ') + "\n";
        rowArray = [];
        rowCount += 1;
        n += 1;
    } 
    return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
