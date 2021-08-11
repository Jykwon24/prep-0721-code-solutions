function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers(2, 2): ', addTwoNumbersResult);

function convertHoursToMinutes(x) {
  return x * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes(2):', convertHoursToMinutesResult);

function getGreeting(x) {
  return 'Hello' + ' ' + x + '!';
}

var getGreetingResult = getGreeting('World');
console.log('getGreeting("World"):', getGreetingResult);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5(10, 5):', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5(35, 10):', multiplyAndDivideBy5Result);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers(22, 7):', subtractTwoNumbersResult);

function getCircleCircumference(x) {
  return 2 * (3.14159265359 * x);
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference(5)', getCircleCircumferenceResult);

function getFullName(x, y) {
  return x + ' ' + y;
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('Full Name (Juan, Ramirez):', getFullNameResult);
