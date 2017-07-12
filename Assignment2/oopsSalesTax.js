var SalesTaxCalculator = function()
{
 //   var parent = this;
    this.inputDetails = [];
    this.salesTax = 0;
    this.total = 0;
};


SalesTaxCalculator.prototype.checkIfImported = function(element)
{
    var imported = /imported/i;
    
    return imported.test(element["name"]);
}



SalesTaxCalculator.prototype.checkIfFoodBookMedicine = function(element)
{
    var FoodBookMedicine = /chocolate|pill|book/i;
    return FoodBookMedicine.test(element["name"]);
}



SalesTaxCalculator.prototype.round = function(tax)
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


SalesTaxCalculator.prototype.finalReplacement = function(taxPercent,index)
{
    var price = this.inputDetails[index]["Price"];

    price = parseFloat(price);
    var tax = (price*taxPercent)/100.00;
    var taxRoundup = this.round(tax);
    var newPrice = price + taxRoundup;
    this.salesTax += (newPrice-price);
    this.total += newPrice;
    newPrice = newPrice.toFixed(2);
    this.inputDetails[index]["Price"] = newPrice;
}


SalesTaxCalculator.prototype.input = function()
{
    var readlineSync = require('readline-sync');

    var numberOfInputItems  = readlineSync.question("Please Enter Total Number of inputItems\n");

    numberOfInputItems = parseInt(numberOfInputItems);


    while(numberOfInputItems != 0)
    {
        var input = {};
        input["Quantity"] = readlineSync.question("Enter Qantity of input item \n");
        input["name"] = readlineSync.question("Enter Name of input item \n");
        input["Price"] = readlineSync.question("Enter Total price of input item \n");
        this.inputDetails.push(input);
        numberOfInputItems--;
    }
}

SalesTaxCalculator.prototype.start = function()
{   
    var parent = this;//console.log(this.checkIfImported(element));
    var mains = function (element,index)
    {

        //console.log(this);
        if( parent.checkIfImported(element) )
        {
        

            if( parent.checkIfFoodBookMedicine(element))
            {
                
        
                parent.finalReplacement(5,index);

            }

            else
            {
                parent.finalReplacement(15,index);
            }



        }
        else
        {
            if(parent.checkIfFoodBookMedicine(element))
            {

                parent.finalReplacement(0,index);

            }

            else
            {
                parent.finalReplacement(10,index);

            }
        }
    };

    this.inputDetails.map(mains);

}


SalesTaxCalculator.prototype.output = function()
{

    this.inputDetails.map(function (element)
    {
        console.log(element["Quantity"] + " " + element["name"] + ": " + element["Price"]);
    });

    this.salesTax = this.salesTax.toFixed(2);
    this.total = this.total.toFixed(2);
    console.log("SalesTaxes: ",this.salesTax);
    console.log("total: ",this.total);

}


var object = new SalesTaxCalculator();
object.input();
object.start();
object.output();

