var myArray = ["a",1,2];

var double = function(element)
{
	if( element === parseInt(element) )
	{
		return 2*element;
	}

	return element;
}

myArray = myArray.map(double);

console.log(myArray);