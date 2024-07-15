// 1) Create an array of rectangle objects
var rectangles = [
  { length: 5, width: 3 },
  { length: 10, width: 4 },
  { length: 7, width: 2 }
];

// 2) Define an assignArea function
var assignArea = function (rectangle) {
  rectangle.area = rectangle.length * rectangle.width; // Calculate area
};

// 3) Define a showInfo function
var showInfo = function (rectangle) {
  console.log("Length: " + rectangle.length);
  console.log("Width: " + rectangle.width);
  console.log("Area: " + rectangle.area);
  console.log("---------------------");
};

// 4) Use forEach and your two functions
rectangles.forEach(function (rectangle) {
  assignArea(rectangle); // Assign area to each rectangle
  showInfo(rectangle);    // Display rectangle information
});
