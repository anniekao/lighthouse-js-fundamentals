const urlDecode = function (text) {
    var decoded = {};
    var idxMarker = 0;

    for (var i = 0; i < text.length; i += 1){
        if (text[i] == "="){
            var keySegment = text.slice(idxMarker, i);

            decoded[keySegment] = '';
            idxMarker = i + 1; 
        }
    }

    return decoded;
};

console.log(urlDecode("duck=rubber")); // {duck: "rubber"}
// console.log(urlDecode("bootcamp=Lighthouse%20Labs")); // {bootcamp: "Lighthouse Labs"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); // {city: "Vancouver", weather: "lots of rain"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); // {"lots of rain"}
