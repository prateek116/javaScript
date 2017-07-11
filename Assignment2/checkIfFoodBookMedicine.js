
exports.checkIfFoodBookMedicine = function(element)
{
    var FoodBookMedicine = /chocolate|pill|book/i;
    return FoodBookMedicine.test(element["name"]);
}

