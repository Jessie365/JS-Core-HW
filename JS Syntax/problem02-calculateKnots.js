/**
 * Created by Dante on 07-Sep-16.
 */
function calcKnots(kmPerH) {
    var knots = Math.round(kmPerH / 1.852 * 100) / 100;
    return knots;
}

console.log(calcKnots(400));