const Car = function (manufacturer, price, engine) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engine = engine;
}



// THIS IS UNNECCESSARY- can just get them by calling them
// Car.prototype.getManufacturer = function(){return this.manufacturer};
// Car.prototype.getPrice = function(){return this.price};
// Car.prototype.getEngine = function(){return this.engine};

module.exports = Car;
