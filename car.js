const Car = function (manufacturer, price, engine) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engine = engine;
}

Car.prototype.getManufacturer = function(){return this.manufacturer};
Car.prototype.getPrice = function(){return this.price};
Car.prototype.getEngine = function(){return this.engine};

// Car.prototype.install = function(carObject){
//     return `${this.engine}`
// }

module.exports = {Car};