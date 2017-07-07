//var inputItems = ["1 imported bottle of perfume at 27.99" , "1 bottle of perfume at 18.99" , "1 packet of headache pills at 9.75", "1 box of imported chocolates at 11.25"];
//var inputItems = ["1 book at 12.49" , "1 music CD at 14.99" , "1 chocolate bar at 0.85" ];
var inputItems = ["1 imported box of chocolates at 10.00" , "1 imported bottle of perfume at 47.50"];
var checklist= [/book/ , /chocolate/ , /pills/ ];

var digit = /\d+.\d+/;
var salesTax = 0;
var total = 0;


function checkIfimported(element)
{
	var imported = /imported/;
	return ( imported.test(element) );

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
	remainder = +(remainder.toFixed(3));
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
	var tax = (Price*taxPercent)/100;
	var taxRoundup = Round(tax);
	var newPrice = Price + taxRoundup;
	salesTax += (newPrice - Price);
	total = total+ newPrice;
	newPrice = newPrice.toFixed(2);

	inputItems[iterator] = inputItems[iterator].replace(digit,newPrice);


	inputItems[iterator] = inputItems[iterator].replace(/ at /," : ");
	

}


main = function loop(element,index)
{
	if( checkIfimported(element) )
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



inputItems.map(main); 



inputItems.map(function loop(element)
{
	console.log(element);
});

salesTax = salesTax.toFixed(2);
total = total.toFixed(2);
console.log("SalesTaxes: ",salesTax);
console.log("total: ",total);

