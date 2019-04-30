let calculateChange = function (total, cash) {
    const MONEY = {twenty: 2000, ten: 1000, five: 500, twoDollars: 200, dollar: 100, quarter: 25, 
                    dime: 10, nickel: 5, penny: 1};
    
    var change = {};
    var remainder = (cash - total);

    
    for (var key in MONEY){
        if (Math.floor(remainder/MONEY[key]) > 0){
            change[key] = Math.floor(remainder / MONEY[key]);
            remainder = remainder - (MONEY[key] * Math.floor(remainder / MONEY[key]));
        } 
    }
   return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

