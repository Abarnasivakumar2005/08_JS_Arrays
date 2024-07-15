// Calling forEach with an inline function
var items = ["The Pyramids", "The Grand Canyon", "Bondi Beach"];

// 1) Change the program to show the number of places
var showItems = function() {
    console.log("Dream destinations:");
    console.log("Number of places to visit: " + items.length);

    items.forEach(function (item) {
        console.log(" – " + item);
    });
};

// Display initial items
showItems();

// Now you can call showItems() from the console
