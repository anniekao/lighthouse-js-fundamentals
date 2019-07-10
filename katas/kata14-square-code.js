const squareCode = function (message) {
    var messageNoSpaces = message.replace(/\s/g, '');
    var rndSqRoot = Math.ceil(Math.sqrt(messageNoSpaces.length));
    var codedArr = sqMessage(messageNoSpaces, rndSqRoot);
    var encodedMessage = '';
    var j = 0;

    while (j < rndSqRoot){
        for (var i = 0; i < codedArr.length; i++){
            if (codedArr[i][j] != undefined){
                encodedMessage += codedArr[i][j];
            }
        }
        j++;
        encodedMessage += ' ';
    }

    return encodedMessage;
};


function sqMessage(message, rndSqRoot){
    var codedResult = [];

    for (var i = 0; i < message.length; i += rndSqRoot) {
        codedResult.push(message.slice(i, i + rndSqRoot));
    }

    return codedResult;
}


console.log(squareCode("chill out")); // => clu hlt io  
console.log(squareCode("feed the dog")); // => fto ehg ee dd
console.log(squareCode("have a nice day")); // => hae and via ecy
console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); // => imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
