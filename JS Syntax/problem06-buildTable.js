/**
 * Created by Dante on 09-Sep-16.
 */
function isFib(num) {
    var result = false;
    var f0 = 1;
    var f1 = 1;
    var fib = 1;
    while(fib <= num) {
        if(num === fib) {
            result = true;
            break;
        }
        fib = f0 + f1;
        f0 = f1;
        f1 = fib;
    }
    return result;
}
function buildTable(input) {
    //begin the table
    var resultHTML = '<table><tr><th>Num</th><th>Square</th><th>Fib</th></tr>';
    for(var i = input[0]; i <= input[1]; i++) {
        resultHTML += '<tr><td>' + i + '</td><td>' + i * i + '</td><td>' + (isFib(i)? "yes" : "no") + '</td></tr>';
    }
    //close the table
    resultHTML += '</table>';
    return resultHTML;
}
