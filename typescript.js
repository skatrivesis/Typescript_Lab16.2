var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
var products = [
    { name: "Sham-Wow", price: 19.99 },
    { name: "Biscut Boys", price: 1.99 },
    { name: "Jack Daniels", price: 24.99 }
];
var inventory = [
    { product: { name: "Motor", price: 10.00 }, quantity: 10 },
    { product: { name: "Sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
//start
var tallestMtn = findNameOfTallestMountain(mountains);
var avgPrice = calcAverageProductPrice(products);
var totalPrice = calcInventoryValue(inventory);
console.log(tallestMtn);
console.log(avgPrice.toFixed(2));
console.log(totalPrice);
//end
function findNameOfTallestMountain(mountains) {
    var tallestHeight = 0;
    var tallestName = "";
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var m = mountains_1[_i];
        if (m.height > tallestHeight) {
            tallestName = m.name;
            tallestHeight = m.height;
        }
    }
    return tallestName;
}
function calcAverageProductPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var p = products_1[_i];
        total += p.price;
    }
    return total / products.length;
}
function calcInventoryValue(inventory) {
    var totalPrice = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var i = inventory_1[_i];
        totalPrice += i.quantity * i.product.price;
    }
    return totalPrice;
}
