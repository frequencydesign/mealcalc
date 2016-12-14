var Dish = require('./models/Dish.js');
var Dinner = require('./models/Dinner.js');
var Diner = require('./models/Diner.js');
var TaxAndTip = require ('./models/meal_tax.js');


var dish1 = new Dish(1, "French Fries", 8);
var dish2 = new Dish(2, "Cheese", 5);
var dish3 = new Dish(3, "Steak", 18);

var diner1 = new Diner(1, "John Smith");
var diner2 = new Diner(2, "Michael Doe");

var dinner1 = new Dinner(diner1);
var dinner2 = new Dinner(diner2);


dinner1.addDishToDinner(dish1);
dinner1.addDishToDinner(dish2);
dinner1.addDishToDinner(dish3);

dinner2.addDishToDinner(dish1);
dinner2.addDishToDinner(dish2);
dinner2.addDishToDinner(dish3);


var totalCost1 = dinner1.calculateTotalAmount();
var totalCost2 = dinner2.calculateTotalAmount();


TaxAndTip(totalCost1);
TaxAndTip(totalCost2);

