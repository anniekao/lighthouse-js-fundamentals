const squareCode = function (message) {
    var rndSqRoot = Math.ceil(Math.sqrt(message.length));
    var messageNoSpaces = removeSpaces(message);
    var codedArr = sqMessage(messageNoSpaces);
    
};

function sqMessage(message){
    var codedResult = [];

    for (var i = 0; i < message.length; i += rndSqRoot) {
        codedResult.push(message.slice(i, i + rndSqRoot));
    }

    return codedResult;
}

function removeSpaces(message){
    var noSpaces = '';

    for (var i = 0; i < message.length; i++){
        if (message[i] != ' '){
            noSpaces += message[i];
        }
    }

    return noSpaces;
}

// function createColumns(message, rndSqRoot){
//     var result = [];

//     for (var i = 0; i < rndSqRoot; i++){
//         result.push([]);
//     }
//     return result;
// }

console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
