const {Dealership} = require("./dealership");

describe("testing dealership class", ()=>{
    test('can get name', ()=>{
        const myDealership = new Dealership("My dealership", 300, 175);
        expect(myDealership.getName()).toBe("My dealership");
    })
})

