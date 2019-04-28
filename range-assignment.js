function range(start, end, step){
    var result = [];
    if (start > end || Math.sign(step) == -1) {
        return [];
    }
    for(var i = start; i <= end; i += step){
        result.push(i);
    }
    return result;
}

