const {Dealership} = require("./dealership");

describe("testing dealership class", ()=>{
    test('can get name', ()=>{
        const myDealership = new Dealership("My dealership", 300, 175);
        expect(myDealership.getName()).toBe("My dealership");
    });
    test('can get maximum number of cars', ()=>{
        const myDealership = new Dealership("My dealership", 300, 175);
        expect(myDealership.getMaxNoOfCars()).toBe(300);
    });
    test('can get maximum number of cars', ()=>{
        const myDealership = new Dealership("My dealership", 300, 175);
        expect(myDealership.getStock()).toBe(175);
    });
});

