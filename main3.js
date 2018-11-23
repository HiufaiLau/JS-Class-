console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.
console.log("Cars class")
class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand)
	constructor(brand, model) {
		this.brand = brand;
		this.speed = 0;
		this.model = model;
		this.carMovement = "The car dosen't start moving yet"
	}

	// methods:
	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

	carModel(name) {
		this.model = name;
	}
	movement() {
		(this.speed > 0) ? this.carMovement = "The car is moving": this.carMovement = "The car has stopped" 
	}

	accelerate(amount) {
		this.speed += amount;
		this.movement()
	}

	// brake(amount) {
	// 	this.speed -= amount;
	// }

	brake(amount) {
		// if (amount >= this.speed) {
		// 	this.speed = 0;
		// } else {
		// 	this.speed -= amount;
		// }
		(amount >= this.speed) ? this.speed = 0: this.speed -= amount
		this.movement();
	}

	stopImmediately() {
		this.speed = 0;
		this.movement()
	}

	status() {
		return this.brand + "(" + this.model + ")" + " running at " + this.speed + " km/h"+ " status check: " + this.carMovement;
	}
}


// Now we use create a Car object using the class

let car = new Car("Ford", "Mondeo");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(20);
console.log(car.status());
car.brake(40);
console.log(car.status());
car.brake(200);
console.log(car.status());




// We may create other cars easily

let car2 = new Car("Ferrari", "Daytona");
car2.accelerate(200);
console.log(car2.status());
let car3 = new Car("Mercedes Benz", "Vision Van");
car3.accelerate(180);
console.log(car3.status());




//TV channel
console.log("TV channel class")
class TV {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
		this.channel = 1;
		this.volume = 50;
		this.resetChannel = this.channel;
		this.resetVolume = this.volume;

	}

	increaseVolume(amount) {
		this.volume += amount;
		(this.volume > 100) ? this.volume = 100: this.volume = this.volume;
	}

	decreaseVolume(amount) {
		this.volume -= amount;
		(this.volume < 0) ? this.volume = 0: this.volume = this.volume;
	}

	setChannel(num){
		(num >50 || num <=0) ? this.channel=this.channel : this.channel = num;
	}

	resetTV(){
		this.volume = this.resetVolume;
		this.channel = this.resetChannel;
	}

	status() {
        return this.brand + "(" + this.model + ")" + " at channel :" + this.channel + ", volume :" +  this.volume
    }
}

let TV1 = new TV ("Panasonic", "R2");
TV1.setChannel(8);
console.log(TV1.status());
TV1.increaseVolume(10);
console.log(TV1.status());
TV1.setChannel(34);
console.log(TV1.status());
TV1.setChannel(2);
console.log(TV1.status());
TV1.decreaseVolume(2)
console.log(TV1.status());
TV1.resetTV();
console.log(TV1.status());
//console.log(Tv.constructor.brand); this is undefined; how can i access the values stored in "constructor"?
let TV2 = new TV ("Sony", "T1");
TV2.setChannel(8);
console.log(TV2.status());
TV2.setChannel(51);
TV2.increaseVolume(10);
console.log(TV2.status());
TV2.setChannel(48);
TV2.decreaseVolume(12)
console.log(TV2.status());
TV2.setChannel(3);
console.log(TV2.status());
TV2.increaseVolume(1)
TV2.resetTV();
console.log(TV2.status());
