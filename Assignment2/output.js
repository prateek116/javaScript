
var input = require("./input.js");

exports.giveOutput = function()
{


    input.inputDetails.map(function loop(element)
    {
        console.log(element["Quantity"] + " " + element["name"] + ": " + element["Price"]);
    });

    input.salesTax = input.salesTax.toFixed(2);
    input.total = input.total.toFixed(2);
    console.log("SalesTaxes: ",input.salesTax);
    console.log("total: ",input.total);

}
