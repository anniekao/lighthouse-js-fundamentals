const makeCase = function (input, style) {
    let output = input;
    let upperLower = '';

    if (typeof style === 'object'){
        upperLower = style[0];
        style = style[1];
    } 
    switch (style){
        case 'camel':
        case 'pascal':
        case 'title':
        case 'kebab':
        case 'snake':
            output = styles(input, style);
            break;
        case 'vowel':
        case 'consonant':
            output = vowelsConsonants(input, style);
            break;
    }

    if (upperLower === 'upper'){
        return makeUpperLowerCase(output, upperLower);
    } else if (upperLower === 'lower'){
        return makeUpperLowerCase(output, upperLower);
    } else {
        return output;
    }
};

function styles(input, style){
    var output = '';

    for (var i = 0; i < input.length; i += 1) {
        if (input[i + 1] === " " && style === 'kebab'){
            output += input[i] + "-";
        } else if (input[i - 1] === " " && style === 'camel') {
            output += input[i].toUpperCase();
        } else if (input[i - 1] === " " || i == 0){
            if (style === 'pascal' || style === 'title') {
            output += input[i].toUpperCase();
            } else {
                output += input[i];
            }
        } else if (input[i] === " ") {
            if (style === 'title'){
                output += input[i];
            } else if (style === 'snake'){
                output += "_";
            }
        } else {
            output += input[i];
        }
    }
    return output;
}

function vowelsConsonants(input, style){
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let output = "";

    for (let i = 0; i < input.length; i+= 1){
        if (VOWELS.includes(input[i].toLowerCase()) && style === 'vowel'){
            output += input[i].toUpperCase();
        } else if (!VOWELS.includes(input[i].toLowerCase()) && style === 'consonant') {
            output += input[i].toUpperCase();
        } else {
            output += input[i];
        }
    }
    return output;
}

function makeUpperLowerCase(input, style){
    let output = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] != " " && style === 'lower') {
            output += input[i].toLowerCase();
        } else if (input[i] != " " && style === 'upper') {
             output += input[i].toUpperCase();
        } else {
            output += input[i];
        }
    }
    return output;
}




console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", "snake"));
console.log(makeCase("THIS IS A STRING", ["lower", "kebab"]));