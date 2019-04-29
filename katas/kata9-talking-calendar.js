// takes in a date in the form of yyyy/mm/dd and returns a readable date, e.g. December 12th, 2014
let talkingCalendar = function (date) {
    var dateArr = date.split('/');
    var year = dateArr[0];
    var month = convertMonth(dateArr[1]);
    var day = ordinalNum(dateArr[2]);

    return month + ' ' + day + ', ' + year;
};

// takes a number and returns it as an oridinal number, e.g. 1st, 22nd, 13th
function ordinalNum(day){
    day = removeFirstZero(day);

    if (day == '1') {
        day = day.substring(1) + 'st';
    } else if (day == '2') {
        day = day.substring(1) + 'nd';
    } else if (day == '3') {
        day = day.substring(1) + 'rd';
    } else if (day.slice(-1) == 1 && day != '11') {
        day = day + "st";
    } else if (day.slice(-1) == 2) {
        day = day + "nd";
    } else if (day.slice(-1) == 3 && day != '13') {
        day = day + "rd";
    } else {
        day = day + "th";
    }
    return day;
}

// takes the month as number and returns the name of the month
function convertMonth(mth){
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
        'December'
    ];

    if (mth[0] == '0') {
        var removedZero = parseInt(mth.substring(1));
        var month = MONTHS[removedZero - 1];
    } else {
        var month = MONTHS[mth - 1];
    }

    return month;
}

// take a number as a string and removes the first zero in the first position [0], if there is one
function removeFirstZero(str){
    if (str[0] == '0'){
        return str.substring(1);
    }
    return str;
}


console.log(talkingCalendar("2017/12/04"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/23"));

