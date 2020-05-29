/*console.log(process.argv[2].includes('.'));*/
var sum = 0;
let message = "The sum of all numbers is: ";
let regex_pattern = '/[A-z]/i'

if (process.argv.length == 2) {
	console.log(message+sum);
} else if (process.argv.length > 2) {
	let i = process.argv.length;
	while(i > 2){
		if (process.argv[i-1].includes('.') == true) {
			number = parseFloat(process.argv[i-1]);
		} else {
			number = parseInt(process.argv[i-1])
		}
		sum += number;
		i--;
	}
	console.log(message+sum);
}