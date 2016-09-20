/**
 * Created by Dante on 16-Sep-16.
 */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Johns", 57),
    new Person("Jon", "Skeet", 38)
];

function groupBy(criteria) {
    if(!people[0].hasOwnProperty(criteria)) {
        return 'Incorrect Criteria';
    }
    var result = [];
    for(var index in people) {
        var appended = false;
        for (var i in result) {
            if('Group ' + people[index][criteria] === i) {
                var personString = people[index].firstName + ' ' + people[index].lastName +
                    '(age ' + people[index].age + ')';
                result['Group ' + people[index][criteria]] += ', ' + personString;
                appended = true;
                break;
            }
        }
        if(!appended) {
            result['Group ' + people[index][criteria]] = people[index].firstName + ' ' + people[index].lastName +
                '(age ' + people[index].age + ')';
        }
    }
    return result;
}

