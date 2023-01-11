const Car = require("./car");
const Dealership = require("./dealership");

let myDealership;
let newCar;

beforeEach(()=>{
    myDealership = new Dealership("My dealership", 300, []);
    newCar = new Car("VroomVroom", 20, 5.2);
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
        myDealership.addCars(newCar);
        expect(myDealership.arrayByManufacturer('VroomVroom')).toEqual(14);
    });
    test('can add a car to stock', ()=>{
        // const myDealership = new Dealership("My dealership", 300);
        const newCar = new Car("VroomVroom", 20, 5.2);
        myDealership.addCars(newCar);
        const expected = ["Suzuki"];
        const actual = myDealership.countStock();
        expect(actual).toEqual(expected);
    })
});
