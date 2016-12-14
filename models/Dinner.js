var Dinner = function(name) {
    this.name = name;
    this.dishes = [];
    this.totalAmount = 0;
};

Dinner.prototype.addDishToDinner = function(dish) {
    this.dishes.push(dish);
};

Dinner.prototype.calculateTotalAmount = function() {
    var total = 0;

    this.dishes.forEach(function(item) {
        total += item.price;

    });

    return this.totalAmount = total;
};

module.exports = Dinner;
