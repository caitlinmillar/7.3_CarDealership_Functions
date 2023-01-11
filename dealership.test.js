const Car = require("./car");
const Dealership = require("./dealership");

let myDealership;
let car;

beforeEach(()=>{
    myDealership = new Dealership("My dealership", 300, []);
    car = new Car("VroomVroom", 20, 5.2);
})

describe("testing dealership class", ()=>{
    test('can get name', ()=>{
        // const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.getName()).toBe("My dealership");
    });
    test('can get maximum number of cars', ()=>{
        // const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.getMaxNoOfCars()).toBe(300);
    });
    test('can get maximum number of cars', ()=>{
        // const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.getMaxNoOfCars()).toBe(300);
    });
});
describe('testing dealership functions', ()=>{
    test('can get stock count', ()=>{
        const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.countStock()).toEqual(14);
    });
    test('get cars by certain manufacturers', ()=>{
        // const myDealership = new Dealership("My dealership", 300);
        myDealership.addCars(car);
        const expected = ["VroomVroom"];
        const actual = myDealership.arrayByManufacturer();
        expect(actual).toEqual(expected);
    });
    test('can add a car to dealership', ()=>{
        myDealership.addCars(car);
        const expected = 15;
        const actual = myDealership.countStock();
        expect(actual).toEqual(expected);
        // number is not increasing after adding car
        // something wrong with with addCars()
    })
});
