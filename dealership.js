const Car = require('./car')

// HAVE TO do this to pass in existing arrayList of cars
const Dealership = function(name, maxNoOfCars, cars){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.cars = cars;
};

// THIS IS IF STARTING with an empty array of cars
// const Dealership = function(name, maxNoOfCars){
//     this.name = name;
//     this.maxNoOfCars = maxNoOfCars;
//     this.cars = [];
// };

const myDealership = new Dealership("My car dealership", 300, cars = [
    ford = {manufacturer: "FORD", price: 2780, engine: 2.0},
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
]);

Dealership.prototype.countStock = function(){
    return this.cars.length};

// Dealership.prototype.addCars = function(car){
//     return this.cars.length;
//     }

Dealership.prototype.addCars = function(car){
    if(this.cars.length < this.maxNoOfCars){
        this.cars.push(car);
    }
};
Dealership.prototype.arrayOfManufacturers = function() {
    return this.cars.map((car) => {
        return car.manufacturer;
    });
}
Dealership.prototype.findFromManufacturor = function(manufacturer){
    return this.cars.filter((car) => car.manufacturer === manufacturer);
}

Dealership.prototype.totalCostOfCars = function(){
    return this.cars.reduce((accumulator, car) => accumulator + car.price, 0);
}

Dealership.prototype.searchCars = function(query, property){
    return this.cars.filter((car) => car[property] === query);
}




module.exports = Dealership;

