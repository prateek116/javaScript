var globalVar = require("./oopsSalesTaxCalculator.js");

exports.finalReplacement = function(taxPercent)
{

    var price = this.price;
    console.log(price);
    price = parseFloat(price);
    var tax = (price*taxPercent)/100.00;
    var taxRoundup = this.round(tax);
    var newPrice = price + taxRoundup;
    globalVar.salesTax += (newPrice-price);
    globalVar.total += newPrice;
    newPrice = newPrice.toFixed(2);
    this.price = newPrice;
    
}
