const Car = require('./car')
const Dealership = function(name, maxNoOfCars, stock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = stock;
};

const myDealership = new Dealership("My dealership", 300, 175);

cars = [
    {manufacturer: "FORD", price: 2780, engine: 2.0},
    {manufacturer: "TOYOTA", price: 2780, engine: 2.0},
    {manufacturer: "SEAT", price: 2780, engine: 2.0},
    {manufacturer: "LAND ROVER", price: 2780, engine: 2.0},
    {manufacturer: "AUDI", price: 2780, engine: 2.0},
    {manufacturer: "CITREON", price: 2780, engine: 2.0},
    {manufacturer: "HONDA", price: 2780, engine: 2.0},
    {manufacturer: "VOLVO", price: 2780, engine: 2.0},
    {manufacturer: "MINI", price: 2780, engine: 2.0},
    {manufacturer: "NISSAN", price: 2780, engine: 2.0},
    {manufacturer: "FIAT", price: 2780, engine: 2.0},
    {manufacturer: "MAZDA", price: 2780, engine: 2.0},
    {manufacturer: "SUZUKI", price: 2780, engine: 2.0},
    {manufacturer: "SKODA", price: 2780, engine: 2.0},
]

const countStock = (stock) => {
    return stock.length();
};

