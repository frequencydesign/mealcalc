function computeAmount(base, percentage) {
    return base * percentage;
}

function findTaxTip(totalCost) {
    var taxRate = parseFloat(prompt("Enter the tax rate as a percentage (e.g., 22): ")) / 100;   // Divide by 100 to get to decimal value
    var tipRate = parseFloat(prompt("Enter the percentage tip you'd like to leave (e.g., 15): ")) / 100;
    var taxValue = computeAmount(totalCost, taxRate);
    var preTipCost = taxValue + totalCost;
    var tipValue = computeAmount(totalCost, tipRate);
    var totalCost = preTipCost + tipValue;
    var message = ("Tax for your meal is $" + taxValue.toFixed(2) + '. ' +
    "You should leave this $" + tipValue.toFixed(2) + " for tip. " +
    "The total cost for your meal is $" + totalCost.toFixed(2) + '.');
    alert(message);
}

module.exports = taxandtip;