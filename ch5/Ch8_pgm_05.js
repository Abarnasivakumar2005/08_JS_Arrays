// Update the getVisitorReport function to include Saturday and Sunday
var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var index = dayInWeek - 1; // Adjust for zero-based index
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var visitors = [354, 132, 210, 221, 481, 99, 150];

// 1) Run the report for Friday.
var reportFriday = getVisitorReport(visitors, 5);
console.log(reportFriday); // Output for Friday

// 3) Write a new function with three parameters
var getMonthlyVisitorReport = function (monthArray, week, dayInWeek) {
  var weekVisitors = monthArray[week - 1]; // Get the desired week
  return getVisitorReport(weekVisitors, dayInWeek);
};

// 4) Create four arrays of week visitor numbers
var week1 = [100, 200, 150, 300, 400, 500, 600]; // Mon-Sun
var week2 = [110, 210, 160, 310, 410, 510, 610];
var week3 = [120, 220, 170, 320, 420, 520, 620];
var week4 = [130, 230, 180, 330, 430, 530, 630];

// Create a month array of the four weeks
var month = [week1, week2, week3, week4];

// Test the function for different weeks and days
console.log(getMonthlyVisitorReport(month, 1, 3)); // Wednesday of week 1
console.log(getMonthlyVisitorReport(month, 2, 5)); // Friday of week 2
console.log(getMonthlyVisitorReport(month, 3, 7)); // Sunday of week 3
console.log(getMonthlyVisitorReport(month, 4, 1)); // Monday of week 4
