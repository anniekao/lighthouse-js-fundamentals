const makeCase = function (input, style) {
    var casedWord = '';
    var upperLower = '';

    if (typeof style == 'object'){
        upperLower = style[0];
        style = style[1];
    } 

    if (style == 'camel'){
        casedWord = camelCase(input);
    } else if (style == 'pascal'){
        casedWord = pascalCase(input);
    
    // } else if (style == 'snake'){
    //     casedWord = snakeCase(input);
    } else if (style == 'kebab'){
        casedWord = kebabCase(input);
    } else if (style == 'title'){
        casedWord = titleCase(input);
    } else if (style == 'vowel'){
        casedWord = vowelCase(input);
    } else if (style == 'consonant'){
        casedWord = consonantCase(input);
    }

    if (upperLower != ''){
        if (upperLower == 'upper'){
            casedWord = lowerCase(casedWord);
        } else {
            casedWord = upperCase(casedWord);
        }
    }

    return casedWord;
};

function camelCase(input){
    var camelCase = '';

    for (var i = 0; i < input.length; i += 1) {
        if (input[i - 1] == " ") {
            camelCase += input[i].toUpperCase();
        } else if (input[i] != " ") {
            camelCase += input[i];
        }
    }
    return camelCase;
}

function pascalCase(input) {
    var pascalCase = '';

    for (var i = 0; i < input.length; i += 1) {
        if (input[i - 1] == " " || i == 0) {
            pascalCase += input[i].toUpperCase();
        } else if (input[i] != " ") {
            pascalCase += input[i];
        }
    }
    return pascalCase;
}

function kebabCase(input) {
    var kebabCase = '';

    for (var i = 0; i < input.length; i += 1) {
        if (input[i + 1] == " ") {
            kebabCase += input[i] + "-";
        } else if (input[i] != " ") {
            kebabCase += input[i];
        }
    }
    return kebabCase;
}

function titleCase(input){
    var titleCase = '';

    for (var i = 0; i < input.length; i += 1) {
        if (input[i - 1] == " " || i == 0) {
            titleCase += input[i].toUpperCase();
        } else {
            titleCase += input[i];
        }
    }
    return titleCase;
}

function vowelCase(input){
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    var vowelCase = '';

    for (var i = 0; i < input.length; i+= 1){
        if (VOWELS.includes(input[i].toLowerCase())){
            vowelCase += input[i].toUpperCase();
        } else {
            vowelCase += input[i];
        }
    }

    return vowelCase;
}

function consonantCase(input) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    var consonantCase = '';

    for (var i = 0; i < input.length; i += 1) {
        if (!VOWELS.includes(input[i].toLowerCase())) {
            consonantCase += input[i].toUpperCase();
        } else {
            consonantCase += input[i];
        }
    }

    return consonantCase;
}

function upperCase(input){
    var upperCased = "";

    for (var i = 0; i < input.length; i++){
        if (input[i] != " "){
            upperCased += input[i].toUpperCase();
        } else {
            upperCased += input[i];
        }
    }
    
    return upperCased;
}

function lowerCase(input){
    var lowerCased = "";

    for (var i = 0; i < input.length; i++) {
        if (input[i] != " ") {
            lowerCased += input[i].toLowerCase();
        } else {
            lowerCased += input[i];
        }
    }

    return lowerCased;

}
// function is commented out because the underscore will not display. Still figuring it out.
// function snakeCase(input) {
//     var snakeCase = "";

//     for (var i = 0; i < input.length; i += 1) {
//         if (input[i - 1] == " ") {
//             snakeCase += input[i] + "_";
//         } else if (input[i] != " ") {
//             snakeCase += input[i];
//         }
//     }
//     return snakeCase;
// }



// console.log(makeCase("this is a string", "camel")); // => thisIsAString
// console.log(makeCase("this is a string", "pascal")); // => ThisIsAString
// console.log(makeCase("this is a string", "snake")); // => this_is_a_string
// console.log(makeCase("this is a string", "kebab")); // => this-is-a-string
// console.log(makeCase("this is a string", "title")); // => This Is A String
// console.log(makeCase("this is a string", "vowel")); // => thIs Is A strIng
// console.log(makeCase("this is a string", "consonant")); // => THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // => THIS_IS_A_STRING


