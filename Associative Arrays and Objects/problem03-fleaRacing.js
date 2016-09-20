/**
 * Created by Dante on 16-Sep-16.
 */

var input = [
    10,
    19,
    'angel, 9',
    'Boris, 10',
    'Georgi, 3',
    'Dimitar, 7'
];

/*
var input = [
    3,
    5,
    'cura, 1',
    'Pepi, 1',
    'UlTraFlea, 1',
    'BOIKO, 1'
];
 */

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function simulateRace(input) {
    var maxJumps = input[0];
    var trackLength = input[1];
    var fleas = [];
    var positions = [];
    var winnerName = '';
    for (var i = 2; i < input.length; i++) {
        var fleaString = input[i].split(' ');
        var name = fleaString[0].substring(0, fleaString[0].length - 1);
        var numberJumps = (parseInt(fleaString[1]));
        fleas[name] = numberJumps;
        positions[name] = 0;
    }
    var finished = false;

    for (var round = 1; round < maxJumps; round++) {
        for(var name in fleas) {
            positions[name] += fleas[name];
            if (positions[name] >= trackLength - 1) {
                finished = true;
                winnerName = name;
                break;
            }
            winnerName = name;
        }
        if (finished) break;
    }
    var result = Array(trackLength + 1).join("#") + '\n';
    result += result;
    for (name in positions) {
        var line = Array(trackLength + 1).join(".") + '\n';
        line = line.replaceAt(positions[name], name[0].toUpperCase());
        result += line;
    }
    result += Array(trackLength + 1).join("#") + '\n';
    result += Array(trackLength + 1).join("#") + '\n';
    result +=  'Winner: ' + winnerName;
    console.log(result);
}

simulateRace(input);
