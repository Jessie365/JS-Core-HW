/**
 * Created by Dante on 09-Sep-16.
 */
function calcSupply(age, maxAge, food, foodPerDay) {
    var foodAmount = (maxAge - age) * 365 * foodPerDay;
    return foodAmount + ' kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.';
}