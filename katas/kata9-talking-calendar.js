// takes in a date in the form of yyyy/mm/dd and returns a readable date, e.g. December 12th, 2014
const talkingCalendar = (date) => {
    let dateArr = date.split('/');
    let year = dateArr[0];
    let month = convertMonth(dateArr[1]);
    let day = ordinalNum(dateArr[2]);

    return month + ' ' + day + ', ' + year;
};

// takes a number and returns it as an oridinal number, e.g. 1st, 22nd, 13th
const ordinalNum = (day) => {
    if (day[0] == '0') {
       day = day.substring(1);
    }

    if (day == '1') {
        day = day + 'st';
    } else if (day === '2') {
        day = day + 'nd';
    } else if (day === '3') {
        day = day + 'rd';
    } else if (day.slice(-1) === '1' && day != '11') {
        day = day + "st";
    } else if (day.slice(-1) === '2' && day != '12') {
        day = day + "nd";
    } else if (day.slice(-1) === '3' && day != '13') {
        day = day + "rd";
    } else {
        day = day + "th";
    }
    return day;
};

// takes the month as number and returns the name of the month
const convertMonth = (mth) => {
    const MONTHS = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November',
        'December'
    ];

    let month = "";
    
    if (mth[0] === '0') {
        // reads in single digit months, i.e. months up to October
       month = MONTHS[parseInt(mth.substring(1)) - 1];
    } else {
        month = MONTHS[mth - 1];
    }

    return month;
};


console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/02/12"));
console.log(talkingCalendar("1987/08/23"));

