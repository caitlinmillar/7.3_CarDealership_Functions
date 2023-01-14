const car = require("./car");
const Dealership = require("./dealership");

let myDealership;

beforeEach(()=>{
    myDealership = new Dealership("My dealership", 300, cars);
});

describe("testing dealership class", ()=>{
    test('can get name', ()=>{
        // const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.name).toBe("My dealership");
    });
    test('can get maximum number of cars', ()=>{
        // const myDealership = new Dealership("My dealership", 300);
        expect(myDealership.maxNoOfCars).toBe(300);
    });
});

describe('testing dealership functions', ()=>{
    test('can get stock count', ()=>{
        expect(myDealership.countStock()).toEqual(14);
    });
    test('get an array of manufacturers', ()=>{
        const expected = [ "FORD", "TOYOTA", "SEAT", "LAND ROVER",
        "AUDI", "CITREON", "HONDA", "VOLVO", "MINI", "NISSAN", "FIAT", "MAZDA", "SUZUKI", "SKODA",];
        const actual = myDealership.arrayOfManufacturers();
        expect(actual).toEqual(expected);
    });
    test("return nothing if car manufacturer doesn't exist", ()=>{
        const expected = [];
        const actual = myDealership.findFromManufacturor("KIA");
        expect(actual).toStrictEqual(expected);
    });
    test('find car by manufacturer', ()=>{
        let expected = [cars[0]];
        const actual = myDealership.findFromManufacturor("FORD");
        expect(actual).toEqual(expected);
        // this test is working but says it's failed because of extra [] in actual, not sure how to fix
    });
    test('can add a car to dealership', ()=>{
        myDealership.addCars(new car("KIA", 7800, 1.4));
        const expected = 15;
        const actual = myDealership.countStock();
        expect(actual).toEqual(expected);
        // number is not increasing after adding car
        // something wrong with with addCars()
    });
    test('can add the total cost of cars', ()=>{
        const expected = 46720;
        const actual = myDealership.totalCostOfCars();
        expect(actual).toEqual(expected);
    });
});


