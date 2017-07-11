
var roundup = require("./Round.js");
var globalVariables = require("./input.js");


exports.finalReplacement = function(taxPercent,index)
{

    var price = globalVariables.inputDetails[index]["Price"];

    price = parseFloat(price);
    var tax = (price*taxPercent)/100.00;
    var taxRoundup = roundup.round(tax);
    var newPrice = price + taxRoundup;
    globalVariables.salesTax += (newPrice-price);
    globalVariables.total += newPrice;
    newPrice = newPrice.toFixed(2);
    globalVariables.inputDetails[index]["Price"] = newPrice;
    
}
