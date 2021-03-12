// console.log('hello');

function ageRangeClassifier(age){
	if (age <= 0) {
		return 'Baby';
	} else if (age >= 1 && age <= 3) {
		return 'Toddler';
	} else if (age >= 4 && age <= 5) {
		return 'Pre-school Age';
	} else if (age >= 6 && age <= 11) {
		return 'Schooling Age';
	} else if (age >= 12 && age <= 19) {
		return 'Adolescent';
	} else if (age >= 20 && age <= 24) {
		return 'Young Adult';
	} else if (age >= 25 && age <= 64) {
		return 'Adult';
	} else {
	 	return 'Senior Citizen';
	}
};

let num1;
let num2;


function mathOperation(num1, num2, operation){
	let sum = num1 + num2
	let difference = num1 - num2
	let product = num1 * num2
	let quotient = num1 / num2
	if (num1 && num2 && operation == '+') {
		return sum
	} else if (num1 && num2 && operation == '-') {
		return difference
	} else if (num1 && num2 && operation == '*') {
		return product
	} else if (num1 && num2 && operation == '/') {
		return quotient
	} else {
		return 'put a number';
	}
}