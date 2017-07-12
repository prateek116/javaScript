
exports.checkIfImported = function (element)
{
    var imported = /imported/i;
    
    return imported.test(element);
}
