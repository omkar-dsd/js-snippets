// Get current date-time
var today = new Date()
console.log(today)


// Function to add days to the given date
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

// ----- Example 1
var current = new Date();
var after_ten_days = current.addDays(10)
console.log(after_ten_days)
