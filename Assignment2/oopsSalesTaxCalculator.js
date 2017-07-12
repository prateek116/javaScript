/*var importedCheck = require("./checkIfImported.js");
var fbmCheck = require("./checkIfFoodBookMedicine.js");
var replacement = require("./finalReplacement.js");
var roundup = require("./Round.js");*/

var salesTax = 0;

var total = 0;




var Cart = function(quantity,item)
{
    this.quantity = quantity;
    this.finalPrice = 0;
    this.item = item;
}

var Item = function(name,price)
{
    this.name = name;
    this.price = price;
}


Cart.prototype = 
{
    constructor: Cart,


    checkIfImported: function(element)
    {
        var imported = /imported/i;
    
        return imported.test(element);
    },


    checkIfFoodBookMedicine: function(element)
    {
        var FoodBookMedicine = /chocolate|pill|book/i;
        return FoodBookMedicine.test(element);
    },


    finalReplacement: function(taxPercent)
    {
        var price = (this.item.price);
        price = parseFloat(price);
        var quantity = (this.quantity);
        quantity = parseFloat(quantity);
        price *= quantity;
        var tax = (price*taxPercent)/100.00;
        var taxRoundup = this.round(tax);
        var newPrice = price + taxRoundup;
        salesTax += (newPrice-price);
        total += newPrice;
        newPrice = newPrice.toFixed(2);
        this.finalPrice = newPrice;
    
    },


    round: function(tax)
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
    },


    calculateTax: function()
    {
        


        if( this.checkIfImported(this.item.name) )
        {

            if( this.checkIfFoodBookMedicine(this.item.name))
            {
                    
            
                this.finalReplacement(5);

             }

            else
            {
                this.finalReplacement(15);
            }



        }
        else
        {
            if(this.checkIfFoodBookMedicine(this.item.name))
            {

                this.finalReplacement(0);

            }

            else
            {
                this.finalReplacement(10);

            }
        }



    },

    output: function()
    {
        console.log( this.quantity + " " + this.item.name + ": " + this.finalPrice );
    }


}

var readlineSync = require('readline-sync');

        var numberOfInputItems  = readlineSync.question("Please Enter Total Number of inputItems\n");

        numberOfInputItems = parseInt(numberOfInputItems);

        while(numberOfInputItems != 0)
        {
            var quantity = readlineSync.question("Enter Qantity of input item \n");
            var name = readlineSync.question("Enter Name of input item \n");
            var price = readlineSync.question("Enter Total price of input item \n");
            var item = new Item(name,price);
            var cart = new Cart(quantity,item);
            cart.calculateTax();
            cart.output();
            numberOfInputItems--;
        }

salesTax = salesTax.toFixed(2);
total = total.toFixed(2);
console.log("salesTax: " + salesTax);
console.log("Toatal: " + total);