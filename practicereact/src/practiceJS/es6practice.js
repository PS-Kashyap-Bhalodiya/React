// class example

class Car{
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

const mycar = new Car("Ford");
mycar.present();

// inheritance
class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show()  {
        return this.present() + ', it is a ' + this.model;
    }
}

const mycar2 = new mycar2("Ford", "Mustang");
mycar2.show();

// arrow functions
hello = (val) => {
    return "Hello " + val;
}

// variables: var, let, const
// var - functional scope. If you use var outside of a function, it belongs to the global scope. If you use var inside of a function, it belongs to that function.
// let - block scope. let is the block scoped version of var, and is limited to the block where it is defined


// array methods
// map() : allows you to run a function on each item in the array, returning a new array as the result.
// it can be used to generate lists.
const myarray = ['apple', 'banana', 'orange'];
const mylist = myarray.map((item) => <p>{item}</p>)

// Destructuring: It makes it easy to exactly only what is needed.
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;
const [car2, , suv2] = vehicles;

// spread operator: (...) allows us to quickly copy all of an existing array into another array.
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [one, two, ...rest] = numbers;

