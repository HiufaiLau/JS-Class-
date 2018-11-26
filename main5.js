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
let p_replace = new Product("vacuum cleaner Siemens", 150)
let p2 = new Product("pencil", 3);
let p2_replace = new Product("pencil fancy", 1);
let p3 = new Product("bike", 300);
let p3_replace = new Product("bike X", 250);


// Now, create a ShoppingCart class, that will contain products

class ShoppingCart {

    constructor() {
        this.products = []; // empty at first
        this.new_products = this.products;
        this.total_price = 0;
        // this.new_total_price = this.total_price;
        this.no_replace_product_price = 0;
        this.discount = 0;
        this.global_count = [];
    }

    addProduct(product) {
        this.products.push(product);
        this.total_price += product.price;
        this.no_replace_product_price = this.total_price;
        console.log("the total price: " + this.total_price);
    }

    quantity_check() {
        let ten_percent = Math.round((this.total_price * 10) / 100);
        (this.products.length >= 5) ? (this.total_price -= ten_percent) : this.total_price = this.no_discount_price;


        var count = [];
        var discount = 0;
        // this.products.forEach(function(x){ count[x.name] = (count[x.name] || 0)+1; });
        this.products.forEach(function (x) {
            if (count[x] === undefined) {
                count[x] = 1;
            } else {
                count[x] = count[x] + 1
                if (count[x] % 4 === 0) {
                    discount += x.price
                }
            }
        });
      
        // console.log("discount: " + discount);
        this.discount = discount;
        console.log("this.discount: " + this.discount);
        this.total_price -= this.discount
        this.global_count = count
        // console.log("show me the count" + this.global_count);

    }

   

    replace(productName, replacementProduct) {
        var array = this.new_products;
        console.log("products array:" + array);
        var new_price = this.total_price
        console.log(new_price);
        // var original_price_sum = 0; //??
        var substitute_price_sum = 0;
        var check = false;
        console.log("the products array: " + array);
        array.forEach(function (oneProduct, i) {
            if (oneProduct.name == productName) {
                console.log(oneProduct.price);

                array.splice(i, 1, replacementProduct);
                console.log(oneProduct.price)
                console.log(array);
                check = true
            }
        })
        console.log(check);
        console.log(array);
 
        array.forEach(function (prod, i) { 
            if (check = true) {
                substitute_price_sum += prod.price;
            }
        })
        console.log(array);
        console.log("substitute_price_sum: " + substitute_price_sum);
       
        new_price = substitute_price_sum;
        this.products = array;
        this.total_price = new_price;
        console.log(this.products);
    }


    toString() {
        return "cart with: " + this.products + " " + "TotalPrice: " + this.total_price;
    }
}


// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p);
cart.addProduct(p);
cart.addProduct(p);
cart.addProduct(p);
// cart.addProduct(p);
// cart.addProduct(p);
// cart.addProduct(p);

// cart.addProduct(p);
// cart.addProduct(p);
// cart.addProduct(p);
// cart.addProduct(p);

// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p2);

cart.addProduct(p3);
// cart.addProduct(p3);
// cart.addProduct(p3);
// cart.addProduct(p3);

// cart.addProduct(p);
// cart.addProduct(p);
// cart.addProduct(p3);
// cart.addProduct(p3);
// cart.addProduct(p3);


//to add discounts:
cart.quantity_check();
console.log("We have a " + cart);
cart.replace("vacuum cleaner", p_replace);
cart.replace("pencil", p2_replace);
// cart.replace("bike", p3_replace)
//to add discounts to the new price:
cart.quantity_check();
console.log(cart)
console.log("We have a replacement " + cart)

