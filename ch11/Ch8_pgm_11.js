// Finding the total shopping bill

var getTotalBill = function (items) {
    var total = 0;

    items.forEach(function (item) {
        total += item.cost * item.numberBought;
    });

    return total;
};

// 1) Add an extra item to the shopping trip.
var items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 },
    { cost: 2.50, numberBought: 5 },
    { cost: 9.87, numberBought: 2 },
];

// 4) Update getTotalBill to accept a single array of items.
console.log("The total cost is $" + getTotalBill(items));
