var array1 = ["a",1,2];
var array2 = ["b",3,4];

for(var iterator = 0; iterator<array2.length; iterator++)
{
	array1.push(array2[iterator]);
}
console.log(array1);