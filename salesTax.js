//var inputItems = ["1 imported bottle of perfume at 27.99" , "1 bottle of perfume at 18.99" , "1 packet of headache pills at 9.75", "1 box of imported chocolates at 11.25"];
//var inputItems = ["1 book at 12.49" , "1 music CD at 14.99" , "1 chocolate bar at 0.85" ];
var inputItems = ["1 imported box of chocolates at 10.00" , "1 imported bottle of perfume at 47.50"];
var checklist= [/book/ , /chocolate/ , /pills/ ];

var digit = /\d+.\d+/;
var salesTax = 0;
var Total = 0;


function checkIfImported(element)
{
	var Imported = /imported/;
	return ( Imported.test(element) );

}


function checkIfFoodBookMedicine(element)
{
	for(var iterator = 0; iterator < checklist.length; iterator++ )
	{
		if( checklist[iterator].test(element) )
		{
			return true;
		}
	}
	return false;
}

function getPriceOfItem(element)
{
	var inputData = digit.exec(element);
	return inputData[0];
}

function Round(element)
{
	var remainder = element%.05;
	//remainder = remainder.toFixed(2);
	//console.log(remainder);
	console.log(remainder);
	remainder = +(remainder.toFixed(3));
	console.log(remainder);
	if( remainder < .025 )
	{
		return element - remainder;
	}

	else
	{
		return element - remainder + .05;
	}
}

function finalReplacement(taxPercent,iterator)
{
	var Price = getPriceOfItem(inputItems[iterator]);
	Price = parseFloat(Price);
	//Price.toFixed();
	//console.log(Price);
	var tax = (Price*taxPercent)/100;
	//console.log(tax);
	var taxRoundup = Round(tax);
	//taxRoundup = taxRoundup.toFixed(2);
	//console.log(taxRoundup);
	var newPrice = Price + taxRoundup;
	salesTax += (newPrice - Price);
//	console.log(salesTax);
	Total = Total+ newPrice;
	console.log(Total);
	newPrice = newPrice.toFixed(2);

	//console.log(newPrice);
	inputItems[iterator] = inputItems[iterator].replace(digit,newPrice);
	inputItems[iterator] = inputItems[iterator].replace(/ at /," : ");
}



for( var iterator = 0 ; iterator < inputItems.length ; iterator++ )
{

	if( checkIfImported(inputItems[iterator]) )
	{

		if( checkIfFoodBookMedicine(inputItems[iterator]))
		{
			
			finalReplacement(5,iterator);

		}

		else
		{
			finalReplacement(15,iterator);
		}



	}
	else
	{
		if(checkIfFoodBookMedicine(inputItems[iterator]))
		{

			finalReplacement(0,iterator);

		}

		else
		{
			finalReplacement(10,iterator);

		}
	}
}

for(iterator = 0; iterator < inputItems.length; iterator++)
{
	console.log(inputItems[iterator]);
}
salesTax = salesTax.toFixed(2);
Total = Total.toFixed(2);
console.log("SalesTaxes: ",salesTax);
console.log("Total: ",Total);

