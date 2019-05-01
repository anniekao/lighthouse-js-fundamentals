const makeCase = function (input, style) {
    var casedWord;
    if (style == 'camel'){
        casedWord = camelCase(input);
    } else if (style == 'pascal'){
        casedWord = pascalCase(input);
    } else if (style == 'snake'){
        casedWord = snakeCase(input);
    }

    return casedWord;
}

function camelCase(input){
    var camelCased = "";

    for (var i = 0; i < input.length; i += 1) {
        if (input[i - 1] == " ") {
            camelCased += input[i].toUpperCase();
        } else if (input[i] != " ") {
            camelCased += input[i];
        }
    }
    return camelCased;
}

function pascalCase(input) {
    var pascalCased = "";

    for (var i = 0; i < input.length; i += 1) {
        if (input[i - 1] == " " || i == 0) {
            pascalCased += input[i].toUpperCase();
        } else if (input[i] != " ") {
            pascalCased += input[i];
        }
    }
    return pascalCased;
}

function snakeCase(input) {
    var snakeCased = "";

    for (var i = 0; i < input.length; i += 1) {
        if (input[i - 1] == " ") {
            snakeCased += input[i] + "_";
        } else if (input[i] != " ") {
            snakeCased += input[i];
        }
    }
    return snakeCased;
}

// console.log(makeCase("this is a string", "camel")); // => thisIsAString
// console.log(makeCase("this is a string", "pascal")); // => ThisIsAString
console.log(makeCase("this is a string", "snake")); // => this_is_a_string
// console.log(makeCase("this is a string", "kebab")); // => this-is-a-string
// console.log(makeCase("this is a string", "title")); // => This Is A String
// console.log(makeCase("this is a string", "vowel")); // => thIs Is A strIng
// console.log(makeCase("this is a string", "consonant")); // => THiS iS a STRiNG
// console.log(makeCase("this is a string", ["upper", "snake"])); // => THIS_IS_A_STRING
