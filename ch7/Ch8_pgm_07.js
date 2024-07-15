// Iterating over an array with forEach
var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

// 1) Add a few extra items to the array
items.push("The Colosseum");
items[items.length] = "Eiffel Tower"; // Using square brackets
items.push("Great Wall of China");

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

// Run the program to show all items
items.forEach(showInfo);

// 2) Update the showInfo function to also display the number of letters in each item.
showInfo = function (itemToShow) {
    console.log(itemToShow + " has " + itemToShow.length + " letters.");
};

// Display items with their letter count
items.forEach(showInfo);

// 3) Write a new function that finds the total number of letters of the elements in the items array.
var totalLetters = function (itemsArray) {
    var total = 0;
    itemsArray.forEach(function (item) {
        total += item.length;
    });
    return total;
};

// Calculate and log the total number of letters
var total = totalLetters(items);
console.log("Total number of letters in all items: " + total);
