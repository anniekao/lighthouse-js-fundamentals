const urlDecode = function (text) {
    var decoded = {};
    var parsedKeys = parseKeys(text);
    var parsedValues = removeSpaces(parseValues(text));

    for (var i = 0; i < parsedKeys.length; i++){
        decoded[parsedKeys[i]] = parsedValues[i];
    }
    
    return decoded;
};

// Take in an array of values and removes the space characters '%20' from each item, if present
// Returns a new array of values without space characters
function removeSpaces(arr){
    var noSpaces = [];
    var idxSpace = 0;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            if (j == arr[i].length - 1){
                noSpaces[i] = arr[i].slice(idxSpace, j + 1);
            } else if (arr[i][j] == '%' && idxSpace == 0){
                noSpaces[i] = arr[i].slice(0,j);
            } else if (arr[i][j] == '%' && idxSpace > 0){
                noSpaces[i] = " " + arr[i].slice(idxSpace,j);
                idxSpace = j + 3;
            }
            console.log(idxSpace);
        }
        idxSpace = 0;
    }
    return noSpaces;
}

console.log(removeSpaces(["Catch%20", "The%20", "Space%20"]));
console.log(removeSpaces(["Two%20Worded"]))

// Takes in a text and parses the values after the '=' and before the '&' characters starting at index 0
// Returns an array containing these values
function parseValues(text){
    var parsedValues = [];

    var valueSegment = '';
    var idxEquals = 0;
    var idxAnd = 0;

    for (var i = 0; i < text.length; i += 1) {
        if (i == text.length - 1){
            valueSegment = text.slice(idxEquals, i + 1);
            parsedValues.push(valueSegment);
            idxAnd = i + 1;
        } else if (text[i] == "&" && idxEquals > 0) {
            valueSegment = text.slice(idxEquals, i);
            parsedValues.push(valueSegment);
            idxAnd = i + 1;
        } else if (text[i] == "=") {
            idxEquals = i + 1;
        } else if (text[i] == "&") {
            valueSegment = text.slice(idxAnd, i);
            parsedValues.push(valueSegment);
            idxAnd = i + 1;
        }
    }
        
    return parsedValues;
}

// Takes in a text and parses the keys before the '=' and after the '&' characters starting at index 0
// Returns an array containing these keys
function parseKeys(text){
    var parsedKeys = [];

    var keySegment = '';
    var idxEquals = 0;
    var idxAnd = 0;

    for (var i = 0; i < text.length; i += 1) {
        if (text[i] == "=" && idxAnd == 0) {
            keySegment = text.slice(idxEquals, i);
            parsedKeys.push(keySegment);
            idxEquals = i + 1;
        } else if (text[i] == "&") {
            idxAnd = i + 1;
        } else if (text[i] == "=" && idxAnd > 0) {
            keySegment = text.slice(idxAnd, i);
            parsedKeys.push(keySegment);
            idxEquals = i + 1;
        } 
    }

    return parsedKeys;
}

// console.log(urlDecode("duck=rubber")); // {duck: "rubber"}
// console.log(urlDecode("bootcamp=Lighthouse%20Labs")); // {bootcamp: "Lighthouse Labs"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); // {city: "Vancouver", weather: "lots of rain"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); // {"lots of rain"}
