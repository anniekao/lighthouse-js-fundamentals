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
