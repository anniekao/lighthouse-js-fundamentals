function whichSchool(age){
    if (age < 13) {
        return "Elementary School";
    } else if (age <= 18 && age >= 13){
        return "Secondary School";
    } else {
        return "Lighthouse Labs";
    }
}

console.log(whichSchool(19));
console.log(whichSchool(20));
console.log(whichSchool(40));
console.log(whichSchool(100));