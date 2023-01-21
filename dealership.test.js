const car = require("./car");
const Dealership = require("./dealership");

let myDealership;

beforeEach(()=>{
    myDealership = new Dealership("My dealership", 300, cars);
});

describe("testing dealership class", ()=>{
    test('can get name', ()=>{
        expect(myDealership.name).toBe("My dealership");
    });
    test('can get maximum number of cars', ()=>{
        expect(myDealership.maxNoOfCars).toBe(300);
    });
    test('can get cars arrayList', ()=>{
        expect(myDealership.cars).toEqual(expect.arrayContaining(cars));
    });
});

describe('testing dealership functions', ()=>{
    test('can get stock count', ()=>{
        expect(myDealership.countStock()).toEqual(14);
    });
    test('can get an array of manufacturers', ()=>{
        const expected = [ "FORD", "TOYOTA", "SEAT", "LAND ROVER",
        "AUDI", "CITREON", "HONDA", "VOLVO", "MINI", "NISSAN", "FIAT", "MAZDA", "SUZUKI", "SKODA",];
        const actual = myDealership.arrayOfManufacturers();
        expect(actual).toEqual(expected);
    });
    test("will return nothing if car manufacturer doesn't exist", ()=>{
        const expected = [];
        const actual = myDealership.findFromManufacturor("KIA");
        expect(actual).toStrictEqual(expected);
    });

    
    test('can find car by manufacturer', ()=>{
        // ORIGINAL ERROR =
        //     Expected: {"engine": 2, "manufacturer": "FORD", "price": 2780}
        //     Received: [{"engine": 2, "manufacturer": "FORD", "price": 2780}]
        // ^^ this was because I had expected=cars[0]
        // it's an object WITHIN an array so needed to be [cars[0]]
        const expected = [cars[0]];
        const actual = myDealership.findFromManufacturor("FORD");
        expect(actual).toEqual(expected);
    });
    test('can add a car to dealership', ()=>{
        myDealership.addCars(new car("KIA", 7800, 1.4));
        const expected = 15;
        const actual = myDealership.countStock();
        expect(actual).toEqual(expected);
    });
    test('can add the total cost of cars', ()=>{
        const expected = 46720;
        const actual = myDealership.totalCostOfCars();
        expect(actual).toEqual(expected);
    });
});


