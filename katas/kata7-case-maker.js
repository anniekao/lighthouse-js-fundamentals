const camelCase = (input) => {
    var camelCased = "";

    for (var i = 0; i < input.length; i += 1){
        if (input[i-1] == " "){
            camelCased += input[i].toUpperCase();
        } else if (input[i] != " ") {
            camelCased += input[i];
        }
    }
    return camelCased;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
