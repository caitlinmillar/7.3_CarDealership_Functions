const {Car} = require("./car");
const {Dealership} = require("./dealership");

let dealership;
let car1;
let car2;
let car3;
let car4;
let car5;
let car6;
let car7;
let car8;
let car9;
let car10;
let car11;

beforeEach(()=>{
    dealership = new Dealership("My dealership", 300);
    car1 = new Car("FORD", 2780, 2.0);
    car2 = new Car("TOYOTA", 2780, 2.0);
    car3 = new Car("SEAT", 2780, 2.0);
    car4 = new Car("LAND ROVER", 2780, 2.0);
    car5 = new Car("AUDI", 2780, 2.0);
    car6 = new Car("CITREON", 2780, 2.0);
    car7 = new Car("HONDA", 2780, 2.0);
    car8 = new Car("VOLVO", 2780, 2.0);
    car9 = new Car("MINI", 2780, 2.0);
    
})

describe("testing dealership class", ()=>{
    test('can get name', ()=>{
        const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.getName()).toBe("My dealership");
    });
    test('can get maximum number of cars', ()=>{
        const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.getMaxNoOfCars()).toBe(300);
    });
    test('can get maximum number of cars', ()=>{
        const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.getMaxNoOfCars()).toBe(300);
    });
});
describe('testing dealership functions', ()=>{
    test('can get stock count', ()=>{
        const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.countStock()).toEqual(14);
    });
});
