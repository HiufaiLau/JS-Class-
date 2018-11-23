// console.log("Objects containing other objects");
// remember our Product class

class Product {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	toString() {
		return this.name + " " + this.price + "€";
	}
}

// And create a couple of products
let p = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);


// Now, create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.products = []; // empty at first
		this.total_price = 0;
	}

	addProduct(product) {
			this.products.push(product);
			this.total_price += product.price;
			  console.log(this.total_price);
	}

	toString() {
		return "cart with: " + this.products + " "+ "TotalPrice: "+ this.total_price ;
	}
}


// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p);
cart.addProduct(p2);
cart.addProduct(p3);

console.log("We have a " + cart);


