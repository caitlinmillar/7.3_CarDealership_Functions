const {Car} = require('./car');
const {Dealership} = require('./dealership');

let car;
let dealership;

// beforeEach(()=>{});

describe('testing car class', ()=>{
    test('can get manufacturer', ()=>{
        const car = new Car("BMW", 5000, 1.4);
        actual = car.getManufacturer();
        expected = "BMW";
        expect(actual).toBe(expected);
    });
    test('can get price', ()=>{
        const car = new Car("BMW", 5000, 1.4);
        expect(car.getPrice()).toBe(5000);
    });
    test('can get engine type', ()=>{
        const car = new Car("BMW", 5000, 1.4);
        expect(car.getEngine()).toBe(1.4);
    });
    it('should be able to make new Car objects', ()=>{
        const car = new Car();
        expect(car).toBeTruthy();
    });    
});




