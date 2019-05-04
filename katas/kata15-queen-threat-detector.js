const generateBoard = function(whiteQueen, blackqueen){
    var board = createArray(8);
    var queensOnBoard = placeQueens(board, whiteQueen, blackqueen);

    return queensOnBoard;
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
function placeQueens(board, pos1, pos2) {
    pos1x = pos1[0];
    pos1y = pos1[1];

    pos2x = pos2[0];
    pos2y = pos2[1];

    board[pos1x][pos1y] = 1;
    board[pos2x][pos2y] = 1;

    return board;
}

var whiteQueen = [0,5];
var blackQueen = [5,0];
console.log(generateBoard(whiteQueen, blackQueen));