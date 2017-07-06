function printPyramid(height)
{
	if( height < 0 )
	{
		console.log("enter height >=0 ") //height must be >=0
		return;
	}
	var spaces = height-1;
	var stars = 2*(height) - 2*(spaces) -1;

	while( height != 0 )
	{
		for( var i = spaces; i > 0; i-- )
		{
			process.stdout.write(" ");   //we can also take a string and concatenate
		}

		for( var i = stars; i > 0; i-- ) 
		{
			process.stdout.write("*");     
		}

		for( var i = spaces; i > 0; i-- )
		{
			process.stdout.write(" ");
		}

		process.stdout.write('\n');

		height--;
		spaces--;
		stars+=2;
	}
}

var readlineSync = require('readline-sync');
var h = readlineSync.question("please input height of tree \n"); 
var height = parseInt(h);
printPyramid(height);