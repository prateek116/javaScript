
var readlineSync = require('readline-sync');

var numberOfInputItems  = readlineSync.question("Please Enter Total Number of inputItems\n");

numberOfInputItems = parseInt(numberOfInputItems);

var inputDetails= [];

var salesTax = 0;

var total = 0;


exports.takeInput = function ()
{
    while(numberOfInputItems != 0)
    {
        var input = {};
        input["Quantity"] = readlineSync.question("Enter Qantity of input item \n");
        input["name"] = readlineSync.question("Enter Name of input item \n");
        input["Price"] = readlineSync.question("Enter Total price of input item \n");
        inputDetails.push(input);
        numberOfInputItems--;
    }

}

exports.inputDetails = inputDetails;
exports.salesTax = salesTax;
exports.total = salesTax;