// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divider (x:number){
	let y = 10 / x;
	if(x == 0 ){
		console.log("fail")
	} else {
		console.log(y);
	}
}

divider (0);