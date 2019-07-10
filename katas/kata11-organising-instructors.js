// Takes in an array of objects with instructors and the course they teach.
// Returns a new object showing courses and who teaches them.
const organizeInstructors = function (instructors) {
    
    let newInstructorsObj = {};
    
    for (let i = 0; i < instructors.length; i++){
        let instructorsName = instructors[i].name;
        let course = instructors[i].course;
            if (Object.keys(newInstructorsObj).includes(course)){
                newInstructorsObj[course].push(instructorsName);
            } else {
                newInstructorsObj[course] = [];
                newInstructorsObj[course].push(instructorsName);
            }        
    }
    return newInstructorsObj;
};


console.log(organizeInstructors([{
        name: "Samuel",
        course: "iOS"
    },
    {
        name: "Victoria",
        course: "Web"
    },
    {
        name: "Karim",
        course: "Web"
    },
    {
        name: "Donald",
        course: "Web"
    }
]));
console.log(organizeInstructors([{
        name: "Brendan",
        course: "Blockchain"
    },
    {
        name: "David",
        course: "Web"
    },
    {
        name: "Martha",
        course: "iOS"
    },
    {
        name: "Carlos",
        course: "Web"
    }
]));