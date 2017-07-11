
var myArray = [1,2,3,4];

var double = function(element)
{
	return 2*element;
}

myArray = myArray.map(double);

console.log(myArray);

