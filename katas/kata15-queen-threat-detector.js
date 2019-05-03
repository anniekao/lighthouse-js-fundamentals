const generateBoard = function(whiteQueen, blackqueen){
    var board = createArray(size);
};

// Takes in the size of the array/number of nested arrays. The default content of the nested arrays are 0s
// Returns a nested array
function createArray(size) {
    var arr = [];

    for (var i = 0; i < size; i++){
        arr.push([]);
        for (var j = 0; j < size; j++){
            arr[i].push(0);
        }
    }

    return arr;
}


// Takes in the positions of the white and black queen as arrays
// Updates the board, so that these positions change to 1's
function placeQueens(pos1, pos2) {

}
console.log(createArray(8, '0'));