class BMI {

    // Constructor used to initialise data in the class
    constructor(weight, height) {
        this.w = weight;
        this.h = height;
    }

    calculateBMI() {
        // Calculating BMI 
        let bmi = this.w / (this.h ** 2);
        return bmi;

    }

}

let myBMI = new BMI(2, 100);
//myBMI.calculateBMI
console.log(myBMI.calculateBMI());

