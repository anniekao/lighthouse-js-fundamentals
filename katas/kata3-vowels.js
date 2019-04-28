let numberOfVowels = function (data) {
    const vowels = "aeiou";
    var count = 0;
    for (var i = 0; i < data.length; i++){
        if (vowels.includes(data[i])){
            count += 1;
        }
    }
    return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
