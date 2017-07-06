var array =["a","b","c","d","d","e","e","a","b"];

var characters = {};

for( var iterator = 0; iterator < array.length; iterator++ )
{
	if(  characters.hasOwnProperty( array[iterator] )  )
	{
		characters[array[iterator]]++;
	}

	else
	{
		characters[array[iterator]] = 1;

	}
}

console.log(characters);
