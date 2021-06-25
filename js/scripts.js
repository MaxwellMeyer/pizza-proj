function Pizza(toppings, size) {
  this.price = 0;
  this.toppings = toppings;
  this.size = size;
}
Pizza.prototype.calcSize = function () {
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
Pizza.prototype.calcToppings = function () {
  this.toppings.forEach((topping) => {
    this.price += 100;
  });
  return this.price;
};

$(document).ready(function () {
  $("#pizzaForm").submit(function (event) {
    event.preventDefault();
    const pizzaToppings = [];
    const pizzaPrice = 0;
    const pizzaSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=top]:checked").each(function () {
      pizzaToppings.push(parseInt($(this).val()));
    });
    let food = new Pizza(pizzaToppings, pizzaSize);
    food.calcSize();
    food.calcToppings();
    $("#pizzaCost").text(food.price);
    $("#results").fadeIn();
    $(".jumbotron").fadeOut();
    $(".rsButton").fadeIn();
    $(".submit").fadeOut();
  });
  $(".again").click(function (event) {
    event.preventDefault();
    $("#results").fadeOut();
    $(".rsButton").fadeOut();
    $(".jumbotron").fadeIn();
    $("#pizzaForm")[0].reset();
    $(".submit").fadeIn();
  });
});
