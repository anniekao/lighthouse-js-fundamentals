const instructorWithLongestName = (instructors) => {
    var longestName = "";
    var result;
    
    for (var i = 0; i < instructors.length; i++){
        for (var j = 0; j < instructors.length; j ++)
        if (instructors[i].name.length > instructors[j].name.length && instructors[i].name.length > longestName.length){
            longestName = instructors[i].name;
            result = instructors[i];
        } else if (instructors[j].name.length > instructors[i].name.length && instructors[j].name.length > longestName.length) {
            longestName = instructors[j].name;
            result = instructors[j];
        }
    }
    return result;
};

console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
]));
