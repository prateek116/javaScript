
exports.round = function(tax)
{
    var remainder = tax%.05;
    remainder = +(remainder.toFixed(3));
    if( remainder < .025 )
    {
        return tax - remainder;
    }

    else
    {
        return tax - remainder + .05;
    }
}
