var readlineSync = require('readline-sync');

var numberOfInputItems  = readlineSync.question("Please Enter Total Number of inputItems\n");

numberOfInputItems = parseInt(numberOfInputItems);

var inputDetails = [];

var salesTax = 0;

var total = 0;

while(numberOfInputItems != 0)
{
    var input = {};
    input["Quantity"] = readlineSync.question("Enter Qantity of input item \n");
    input["name"] = readlineSync.question("Enter Name of input item \n");
    input["Price"] = readlineSync.question("Enter Total price of input item \n");
    inputDetails.push(input);
    numberOfInputItems--;
}

//console.log(inputDetails);







function checkIfImported(element)
{
    var imported = /imported/i;
//    console.log(element["name"]);
    return imported.test(element["name"]);
}

function checkIfFoodBookMedicine(element)
{
    var FoodBookMedicine = /chocolate|pill|book/i;
    return FoodBookMedicine.test(element["name"]);
}

/*var totalSalesTax = (function()
{
    var salesTax = 0;
    return function()
    {
        salesTax += (newPrice - price);

    }
})();*/


/*var totalPrice = (function()
{
    var total = 0;
    return function()
    {
        total += newPrice;
    }
})*/

function Round(tax)
{
    var remainder = tax%.05;
    remainder = +(remainder.toFixed(3));
    if( remainder < .025 )
    {
        return tax - remainder;
    }

    else
    {
        return tax - remainder + .05;
    }
}



function finalReplacement(taxPercent,index)
{
    var price = inputDetails[index]["Price"];
 //   console.log(price);
    price = parseFloat(price);
    var tax = (price*taxPercent)/100.00;
    var taxRoundup = Round(tax);
    var newPrice = price + taxRoundup;
    salesTax += (newPrice-price);
    total += newPrice;
    newPrice = newPrice.toFixed(2);
    inputDetails[index]["Price"] = newPrice;
    
}





var main = function loop(element,index)
{
    if( checkIfImported(element) )
    {
    

        if( checkIfFoodBookMedicine(element))
        {
    
            finalReplacement(5,index);

        }

        else
        {
            finalReplacement(15,index);
        }



    }
    else
    {
        if(checkIfFoodBookMedicine(element))
        {

            finalReplacement(0,index);

        }

        else
        {
            finalReplacement(10,index);

        }
    }
}


inputDetails.map(main); 












inputDetails.map(function loop(element)
{
    console.log(element["Quantity"] + " " + element["name"] + ": " + element["Price"]);
});

salesTax = salesTax.toFixed(2);
total = total.toFixed(2);
console.log("SalesTaxes: ",salesTax);
console.log("total: ",total);