const Car = function (manufacturer, price, engine) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engine = engine;

    this.getManufacturer = () => manufacturer;
  
}

// Car.prototype.getManufacturer = function(getManufacturer){
//     return this.manufacturer;
// }

// Car.prototype.install = function(carObject){
//     return `${this.engine}`
// }

module.exports = {Car};