// Business Logic
// Starts new pizza order
function PizzaOrder() {
  this.pizzas = [],
  this.currentId = 0
};
// Starts new individual pizza
function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size,
  this.price = 10
};
// Assign each pizza an Id
PizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
// Add pizza to order
PizzaOrder.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
};
// Add size of pizza
Pizza.prototype.addSize = function(size) {
  this.size = size;
}
// Add toppings to pizza
Pizza.prototype.addToppings = function(toppings) {
  this.toppings = toppings;
};
// Pizza price by size options
Pizza.prototype.priceBySize = function(size) {
  this.size = size;
  if(this.size === "large"){
    this.price;
  } else if (this.size === "extraLarge") {
    this.price += 4;
  } else if (this.size === "personalPizza") {
    this.price += 7;
  } else {
    console.log("There is an error for pizza size selection");
  }
};
// Pizza price by toppings
Pizza.prototype.priceByToppings = function(topping) {
  if(this.topping === "noCheese") {
    this.price -= 1;
  } if(this.topping === "anchovies") {
    this.price += 2;
  } if (this.topping === "mushrooms") {
    this.price -= 1;
  } if(this.topping === "olives") {
    this.price -= 1;
  }  if (this.topping === "pineapple") {
    this.price += 3;
  } if(this.topping === "clams") {
    this.price += 4;
  } if (this.topping === "peas") {
    this.price  += 1;
  } else if (this.topping === "") {
    this.price;
  } else {
    console.log("There is an error for pizza topping selection");
  }
}

// User Interface Logic
$(document).ready(function() {
  var pizzaOrder = new PizzaOrder();
  var pizza;
  $("button#pizzaButton").click(function(event) {
    event.preventDefault();
    $("button#pizzaButton").hide();
    $("form.pizzaOptions").show();
  });
  $("form.pizzaOptions").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza();
    var size = $(this.size).val();
    pizza.priceBySize(size);
    pizzaOrder.addPizza(pizza);
    var toppings = [];
    $.each($("input:checkbox[name=topping]:checked"), function() {
      toppings.push($(this).val());
    });
    console.log(toppings);
    pizza.addToppings(toppings);
    console.log(pizzaOrder.pizzas);
  });
  $("form.pizzaOptions").hide();
});
