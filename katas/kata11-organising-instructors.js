// Takes in an array of objects with instructors and the course they teach.
// Returns a new object showing courses and who teaches them.
const organizeInstructors = function (instructors) {
    
    var instructorKeys = returnKeys(instructors);
    var newInstructorsObj = populateObjKeys(instructorKeys);
    
    for (var i = 0; i < instructors.length; i++){
        var instructorsName = instructors[i].name;
        var course = instructors[i].course;

        newInstructorsObj[course].push(instructorsName);
    }
    return newInstructorsObj;
};

// Takes in an object and returns a new array containing the object's unique keys.
function returnKeys(obj) {
    var keys = [];

    for (var i = 0; i < obj.length; i++){
        if (!keys.includes(obj[i].course)){
            keys.push(obj[i].course);
        }
    }
    return keys;
}

// Takes in an array and populates a new object using the values of the array 
// as the keys and the values as an empty array.
function populateObjKeys(arr){
    var newObj = {};

    for (var i = 0; i < arr.length; i++){
        newObj[arr[i]] = [];
    }
    return newObj;
}

console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
    ])); 
console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
    ]));
