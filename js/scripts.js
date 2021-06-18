function Pizza(price, toppings, size) {
  this.price = price;
  this.toppings = toppings;
  this.size = size;
}
Pizza.prototype.size = function () {
  let pizzaSize = this.size;
  let pizzaPrice = 0;
  this.price = 0;
  switch (pizzaSize) {
    case "family":
      pizzaPrice = 21000;
      break;
    case "large":
      pizzaPrice = 2750;
      break;
    case "medium":
      pizzaPrice = 2500;
      break;
  }
  return (this.price += pizzaPrice);
};

Pizza.prototype.toppings = function () {
  this.toppings.forEach((topping) => {
    this.price += 100;
  });
  return this.price;
};
