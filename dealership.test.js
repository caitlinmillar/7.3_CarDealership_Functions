const {Car} = require('./car');
const {Dealership} = require('./dealership');

let car;
let dealership;

beforeEach(()=>{
    const car = new Car("BMW", 5000, 1.4);
});

describe('testing car properties can be accessed', ()=>{
    const car = new Car("BMW", 5000, 1.4);
    actual = car.getManufacturer();
    expected = "BMW";
    expect(actual).toBe(expected);
});

it('should be able to make new Car objects', ()=>{
    const car = new Car();
    expect(car).toBeTruthy();
});


