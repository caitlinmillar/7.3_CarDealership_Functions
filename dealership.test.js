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
        expect(myDealership.countStock()).toEqual(14);
    });
    test('get an array of manufacturers', ()=>{
        // const myDealership = new Dealership("My dealership", 300);
        myDealership.addCars(car);
        const expected = cars[0];
        const actual = myDealership.arrayByManufacturer();
        expect(actual).toEqual(expected);
    });
    test('find car by manufacturer', ()=>{
        const myDealership = new Dealership("My dealership", 300, []);
        const expected = ["FORD"];
        const actual = myDealership.arrayMan();
        expect(actual).toEqual(expected);
        // this test is working but says it's failed because of extra [] in actual, not sure how to fix
    });
    test('can add a car to dealership', ()=>{
        myDealership.addCars(car);
        const expected = 15;
        const actual = myDealership.countStock();
        expect(actual).toEqual(expected);
        // number is not increasing after adding car
        // something wrong with with addCars()
    });
    test('can add the total cost of cars', ()=>{
        const expected = 38920;
        const actual = myDealership.totalCostOfCars();
        expect(actual).toEqual(expected);
    });
});


