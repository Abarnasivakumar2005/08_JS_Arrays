// Manipulating arrays with push, pop and join
var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items); // Initial items

removed = items.pop();
console.log(removed + " was removed");
console.log(items.join(" and ")); // Joined items

/* Further Adventures */

// 1) Push another item onto the array.
items.push("The Colosseum");

// 2) Log the joined items.
console.log(items.join(" and "));

// 3) Set one of the items using square brackets.
items[2] = "The Taj Mahal"; // Change "Bondi Beach" to "The Taj Mahal"

// Log the updated items
console.log(items.join(" and "));

// 4) Can you push more than one item at a time?
items.push("Eiffel Tower", "Great Wall of China"); // Push multiple items

// Log the final items
console.log(items.join(" and "));
