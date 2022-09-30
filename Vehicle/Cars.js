class Vehicle {
    //Constructor for Cars
    constructor(make, model, year) {

        this.makeCar = make;
        this.modelCar = model;
        this.yearCar = year;
    }

    Information() {
        console.log(`Make: ${this.makeCar}`);
        console.log(`Model: ${this.modelCar}`);
        console.log(`Year: ${this.yearCar}`);
    }
}

// let myVehicle = new Vehicle('Mercedes', 'Avg', 2018);
// myVehicle.Information();

class Cars extends Vehicle {

    constructor(make, model, year, doors) {

        //Calls Parent Constructor
        super(make, model, year);

        this.doorsCar = doors;
    }

    Info() {

        // Calls Parent Method
        super.Information();
        console.log(`Doors: ${this.doorsCar}`);
    }
}
let myCars = new Cars('Mercedes', 'Avg', 2018, 2);
console.log(myCars.Info());
//myCars.Info();