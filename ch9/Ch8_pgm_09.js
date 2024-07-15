// Using the arguments passed by forEach
var players;
var showArguments;

players = ["Dax", "Jahver", "Kandra"];

// 1) Add two more names to the players array.
players.push("Luna");
players.push("Finn");

showArguments = function (item, index, wholeArray) {
  // 3) Change the first console.log to use wholeArray and index
  console.log("Item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

// 2) Run the program.
players.forEach(showArguments);
