function calculateRectangleArea(length, width){
    if (Math.sign(length) == -1 || Math.sign(width) == -1){
        return undefined
    } else {
        return length * width;
    }
}

function calculateTriangleArea(base, height) {
    if (Math.sign(base) == -1 || Math.sign(height) == -1){
        return undefined
    } else {
        return (base * height) / 2;
    }
}

function calculateCircleArea(radius) {
     if (Math.sign(radius) == -1) {
         return undefined
     } else {
         return Math.PI * Math.pow(radius, 2);
     }
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

