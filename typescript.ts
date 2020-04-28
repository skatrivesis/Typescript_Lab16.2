interface Mountain{
    name:string;
    height:number;
}

interface Product{
    name:string;
    price:number;
}

interface InventoryItem{
    product:Product;
    quantity:number;
}

let mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];

let products: Product[] = [
    {name: "Sham-Wow", price: 19.99},
    {name: "Biscut Boys", price: 1.99},
    {name: "Jack Daniels", price: 24.99}
];

let inventory: InventoryItem[] = [
    {product: {name: "Motor", price: 10.00}, quantity: 10},
    {product: {name: "Sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}

];

//start
let tallestMtn = findNameOfTallestMountain(mountains);
let avgPrice = calcAverageProductPrice(products);
let totalPrice = calcInventoryValue(inventory);

console.log(tallestMtn);
console.log(avgPrice.toFixed(2));
console.log(totalPrice);
//end

function findNameOfTallestMountain(mountains:Mountain[]):string {
    let tallestHeight = 0;
    let tallestName = "";

    for(let m of mountains){
        if(m.height > tallestHeight){
            tallestName = m.name;
            tallestHeight = m.height;
        }
    }
    return tallestName;
}

function calcAverageProductPrice(products:Product[]):number {
    let total = 0;

    for(let p of products){
        total += p.price;
    }
    return total/products.length;
}

function calcInventoryValue(inventory:InventoryItem[]):number {
    let totalPrice = 0;

    for(let i of inventory){
        totalPrice += i.quantity * i.product.price;
    }
    return totalPrice;
}

