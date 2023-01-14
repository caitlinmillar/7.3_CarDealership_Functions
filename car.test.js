const Car = require('./car');
// {Car} destructures the class, gets a car thing from in car, we don't have one
// if there were three 'classes' car, train, plan we import using {}

let newCar;

beforeEach(()=>{
    newCar = new Car("VroomVroom", 5000, 1.4);
})

describe('testing car class', ()=>{
    test('can get manufacturer', ()=>{
        //const car = new Car("BMW", 5000, 1.4);
        const actual = newCar.getManufacturer();
        const expected = "VroomVroom";
        expect(actual).toBe(expected);
    });
    test('can get price', ()=>{
        // const car = new Car("BMW", 5000, 1.4);
        expect(newCar.getPrice()).toBe(5000);
    });
    test('can get engine type', ()=>{
        //const car = new Car("BMW", 5000, 1.4);
        expect(newCar.getEngine()).toBe(1.4);
    });
    it('should be able to make new Car objects', ()=>{
        //const car = new Car();
        expect(newCar).toBeTruthy();
    });    
});




