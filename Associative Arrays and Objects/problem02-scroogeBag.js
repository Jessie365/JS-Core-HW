/**
 * Created by Dante on 16-Sep-16.
 */
var input = [
    'coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1'
];

function isInt(x) {
    return parseInt(x) === x
}

function calculateCoins(input) {
    var sum = 0;
    for(var i in input) {
        var string = input[i].split(' ');
        var key = string[0];
        var value = Number(string[1]);
        if (key.toLowerCase() === 'coin' && isInt(value)) {
            sum += value;
        }
    }
    var bronze = sum % 10;
    sum /= 10;
    var silver = Math.floor(sum) % 10;
    sum /= 10;
    var gold = Math.floor(sum) % 10;
    var resultString = 'gold : ' + gold + '\nsilver : ' + silver + '\nbronze : ' + bronze;
    console.log(resultString);
}

//calculateCoins(input);