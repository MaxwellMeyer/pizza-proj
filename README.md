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
2. Alternatively, clone the repository from GH via [this link](), and open in browser.

## Specifications:

- Describe: Pizza object constructor (Pizza())
- Test: Create new pizza object
- Expect: (new Pizza).toEqual(pizza1(price, toppings, size)).

- Describe: calcSize method for Pizza constructor (Pizza.prototype.calcSize())
- Test: Should determine size cost based on inputted size
- Expect: (pizza1.calcSize).toEqual(pizza1(500, toppings, medium)) for medium
  (pizza1.calcSize).toEqual(pizza1(750, toppings, large)) for large
  (pizza1.calcSize).toEqual(pizza1(1000, topping, family)) for family

- Describe: calcToppings method for Pizza constructor (Pizza.prototype.calcToppings())
- Test: Should determine the cost of the selected toppings based on user input.
- Expect: (pizza1.calcToppings).toEqual(pizza1(1500, [5], family )) for a family size with 5 toppings
  (pizza1.calcToppings).toEqual(pizza1(950, [2], large)) for a large size with 2 toppings

## Known Bugs

Some customers have complained about the price of the pizzas.

## License Information

You can find all applicable licensing information [here](https://opensource.org/licenses/MIT).

## Contact me!

Maxwell Meyer

maxreadswell@gmail.com
