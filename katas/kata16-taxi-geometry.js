const blocksAway = directions => {
  let blocks = {east: 0, north: 0};

  // adds the first directions to the blocks obj
  if (directions[0] === 'right') {
    blocks.east += directions[1];
  } else {
    blocks.north += directions[1];
  }
  
  // sets the initial direction that the taxi is going
  let dir = directions[0] === 'right' ? 'right' : 'up';
  
  for (let i = 2; i < directions.length; i += 2){
    switch(dir) {
      case ('up'): {
         if (directions[i] === 'left') {
           blocks.east -= directions[i + 1];
           dir = 'left';
         } else {
           blocks.east += directions[i + 1];
           dir = 'right';
         }
         break;
      }
      case ('down'): {
        if (directions[i] === 'right'){
          blocks.east += directions[i + 1];
          dir = 'right';
        } else {
          blocks.east -= directions[i + 1];
          dir = 'left';
        }
        break;
      }
      case ('left'): {
        if (directions[i] === 'left'){
          blocks.north -= directions[i + 1];
          dir = 'down';
        } else {
          blocks.north += directions[i + 1];
          dir = 'up';
        }
        break;
      }
      case ('right'): {
        if (directions[i] === 'left'){
          blocks.north += directions[i + 1];
          dir = 'up';
        } else {
          blocks.north -= directions[i + 1];
          dir = 'down';
        }
      }
    }
  }

  return blocks;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1, "left", 2])); // {east: 1, north: 1}
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1])); // {east: 3, north: 3}
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); // {east: 2, north: 0}
