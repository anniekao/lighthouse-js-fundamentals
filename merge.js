function merge(arr1, arr2) {
    if (arr1 === [] && arr2 === []) {
        return [];
    } else if (arr1 === []) {
        return arr2;
    } else if (arr2 === []) {
        return arr1;
    }

    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return sort(arr1);
}

function sort(arr) {
    var sorted = false;

    while (!sorted) {
        sorted = false;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    var swap = arr[i];
                    arr[i] = arr[j];
                    arr[j] = swap;
                    sorted = true;
                }
            }
        }
    }
    return arr;
}
