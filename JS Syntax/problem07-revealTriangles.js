/**
 * Created by Dante on 09-Sep-16.
 */
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
function revealTriangles(input) {
    var copy = new Array(input.length);
    for (var key in input) {
        copy[key] = input[key];
    }

    for (var index = 0; index < input.length - 1; index++) {

        for (var indexInString = 0; indexInString < input[index].length; indexInString++) {

            if ((input[index+1][indexInString - 1] !== undefined) &&
                input[index+1][indexInString] !== undefined &&
                input[index+1][indexInString + 1] !== undefined) {

                var s1 = input[index+1][indexInString - 1];
                var s2 = input[index+1][indexInString];
                var s3 = input[index+1][indexInString + 1];
                var s4 = input[index][indexInString];
                if ((s1 === s2) && (s3 === s4) && (s1 === s4)) {
                    copy[index+1] = copy[index+1].replaceAt(indexInString - 1, '*');
                    copy[index+1] = copy[index+1].replaceAt(indexInString, '*');
                    copy[index+1] = copy[index+1].replaceAt(indexInString + 1, '*');
                    copy[index] = copy[index].replaceAt(indexInString, '*');
                }

            }
        }
    }
    for (var key2 in copy) {
        console.log(copy[key2]);
    }
    //console.log(copy);
}