// Business Logic
// Starts new pizza order
function PizzaOrder() {
  this.pizzas = []
};
// Starts new individual pizza
function Pizza(topping, size) {
  this.toppings = [],
  this.size = size,
  this.price = 10
};

// User Interface Logic
$(document).ready(function() {
  var pizzaOrder = new PizzaOrder();
  $("button#pizzaButton").click(function(event) {
    event.preventDefault();
    $("button#pizzaButton").hide();
    $("form.pizzaOptions").show();
  });
  $("form.pizzaOptions").submit(function(event) {
    event.preventDefault();
    $("form.pizzaOptions").hide();
    $("div.checkout").show();
  });
});
