const Car = require('./car')

// COULD do this to pass in existing stock of cars
const Dealership = function(name, maxNoOfCars, cars){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.cars = cars;
};

// const Dealership = function(name, maxNoOfCars){
//     this.name = name;
//     this.maxNoOfCars = maxNoOfCars;
//     this.cars = [];
// };

// NOT NECESSARY ?
Dealership.prototype.getName = function(){return this.name};
Dealership.prototype.getMaxNoOfCars = function(){return this.maxNoOfCars};
Dealership.prototype.getEngine = function(){return this.stock};
Dealership.prototype.getCars = function(){return this.cars};

// Dealership.prototype.addCars = function(car){
//     return this.cars.length;
//     }

const myDealership = new Dealership("My car dealership", 300, cars = [
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
]);

Dealership.prototype.countStock = function(){
    return this.cars.length};

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





module.exports = Dealership;

