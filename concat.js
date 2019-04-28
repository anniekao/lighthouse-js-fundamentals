function concat(arr1, arr2){
    if (arr1 === []){
        return arr2;
    }else if (arr2 === []){
        return arr1;
    }

    for (var i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}
