const urlDecode = function (str) {
    const noSpaces = str.replace(/%20/g, ' ');
    const vals = noSpaces.match(/=([A-Za-z]|\s)+/g);
    const keys = noSpaces.match(/[A-Za-z]+=/g);
    let decoded = {};

    for (let i = 0; i < keys.length; i++){
        // trim '=' character at end of key
        let key = keys[i].slice(0, keys[i].length-1);
        // trim '=' character from beginng of value
        let val = vals[i].slice(1, vals[i].length);

        // add to decoded object
        decoded[key] = val;
    }
    return decoded;

};
