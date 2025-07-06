function lifeInWeeks(age) {
    var dyingAge = 90;
    var remainingYears = dyingAge - age;
    var remainingMonths = remainingYears * 12;
    var remainingWeeks = remainingYears * 52;
    var remainingDays = remainingYears * 365;

    console.log("You have " + remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.");
}

lifeInWeeks(21);