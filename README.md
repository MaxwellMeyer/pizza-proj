# Pizza Time!

#### Written by Maxwell Meyer

## Applied Technologies

This project was built using:

- HTML
- CSS
- Bootstrap
- Javascript
- jQuery
- GIT/Terminal
- Github

## Description/Goals

The user will be able to build their own pizza using any unique combination of the available toppings, and see how much the pizza will cost based on their chosen combination and size.

## Setup

1. Follow link to my Github repo
2. Alternatively, clone the repository from GH via [this link]()
3. Navigate to the root directory of the newly cloned project
4. Open the index.html file in the browser via live server

## Specifications:

```
Describe: Pizza object constructor (Pizza());

Test: "Should correctly initialize a new pizza object"

Code: let testPizza = new Pizza();

Expect: testPizza.toEqual({price: undefined, toppings: undefined, size: undefined})

```

```

 Describe: calcSize() method for Pizza objects (Pizza.prototype.calcSize());

 Test: "Should determine size cost of a pizza based on pizza size input"

 Code: let testPizza1 = new Pizza([], "medium");
       testPizza1.calcSize();

 Expect: testPizza1.toEqual({price: 2500, toppings: Array(0), size: "medium"})

```

```

 Describe: calcSize() method for Pizza objects (Pizza.prototype.calcSize());

 Test: "Should determine size cost of a pizza based on pizza size input"

 Code: let testPizza2 = new Pizza([], "large");
       testPizza2.calcSize();

 Expect: testPizza2.toEqual({price: 2750, toppings: Array(0), size: "large"})

```

```

 Describe: calcSize() method for Pizza objects (Pizza.prototype.calcSize());

 Test: "Should determine size cost of a pizza based on pizza size input"

 Code: let testPizza3 = new Pizza([], "family");
       testPizza3.calcSize();

 Expect: testPizza3.toEqual({price: 21000, toppings: Array(0), size: "family"})

```

```
 Describe: calcToppings() method for Pizza objects (Pizza.prototype.calcToppings())

 Test: "Should update the cost of the pizza object according to the quantity of selected toppings based on user input"

 Code: let testPizza4 = new Pizza([1], "undefined");
       testPizza4.calcToppings();

 Expect: testPizza4.toEqual({price: 100, toppings: Array(1), size: "undefined"})

```

```
 Describe: calcToppings() method for Pizza objects (Pizza.prototype.calcToppings())

 Test: "Should update the cost of the pizza object according to the quantity of selected toppings based on user input"

 Code: let testPizza5 = new Pizza([6], "undefined");
       testPizza5.calcToppings();

 Expect: testPizza5.toEqual({price: 600, toppings: Array(6), size: "undefined"})

```

```
 Describe: use calcSize() and calcToppings() methods in conjunction to determine the total cost for Pizza objects (Pizza.prototype.calcSize(), Pizza.prototype.calcToppings())

 Test: "Should determine the total cost of a pizza object based on both input size, and input toppings"

 Code: let testPizza6 = new Pizza([5], "family");
       testPizza6.calcSize();
       testPizza6.calcToppings();

 Expect: testPizza6.toEqual({price: 21500, toppings: Array(5), size: "family"})

```

## Known Bugs

Some customers have complained about the price of the pizzas.

## License Information

You can find all applicable licensing information [here](https://opensource.org/licenses/MIT).

## Contact me!

Maxwell Meyer

maxreadswell@gmail.com
