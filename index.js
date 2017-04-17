var balance = 25.00; 

function deduct(amount){
	var result;

	if(amount < 0.0  || amount == 0.0){
		result = "Invalid Transaction"; 
	}
	else{
		balance -= amount; 

		if(balance < 0.0){
			result = "Amount Due: " + Math.abs(balance); 
			balance = 0.0; 
		}
		else{
			result = "Remaining Balance: " + balance; 
		}
	}
	return result; 
}

module.exports = {
	
	deduct: deduct, 
}