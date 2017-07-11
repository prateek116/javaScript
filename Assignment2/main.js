var inputVariables = require("./input.js");
var importedCheck = require("./checkIfImported.js");
var foodBookMedicineCheck = require("./checkIfFoodBookMedicine.js");

var replacement = require("./finalReplacement.js");
var giveOutput = require("./output.js");

inputVariables.takeInput();

var mains = function (element,index)
{

    
    if( importedCheck.checkIfImported(element) )
    {
    

        if( foodBookMedicineCheck.checkIfFoodBookMedicine(element))
        {
            
    
            replacement.finalReplacement(5,index);

        }

        else
        {
            replacement.finalReplacement(15,index);
        }



    }
    else
    {
        if(foodBookMedicineCheck.checkIfFoodBookMedicine(element))
        {

            replacement.finalReplacement(0,index);

        }

        else
        {
            replacement.finalReplacement(10,index);

        }
    }
};


inputVariables.inputDetails.map(mains);

giveOutput.giveOutput();



