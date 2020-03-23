// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';
	
	// For storing the order total:
	var total;
    
    // Get references to the form values:
		var quantity = document.getElementById('quantity').value;
		var int = parseInt(quantity, 10);
        
	var price =  document.getElementById('price').value;
	var priceFloat = parseFloat(price);

	var tax =  document.getElementById('tax').value;
	var taxFloat = parseFloat(tax);

	var discount =  document.getElementById('discount2').value;
	var discFloat = parseFloat(discount);

	var shipping =  document.getElementById('shipping').value;
	var shipFloat = parseFloat(shipping);
    
	// Add validation here later!
	
	// Calculate the initial total:
	total = int * priceFloat;
	console.log("total before tax: " + total);
	
	// Make the tax rate easier to use:
	taxFloat = taxFloat / 100;
	taxFloat = taxFloat + 1;
	
	// Factor in the tax:
	total = total * taxFloat;
	console.log("total after tax: " + total);
	
	// Factor in the discount:
	if(int > 100) {
		discFloat = discFloat*2
	}

	total = total * (1 - discFloat);

	if (total > 100) {
		shipFloat = 0;
	}
	total = total + shipFloat;
	console.log("total after discount: " + total);

	// Format the total to two decimal places:
	total = total.toFixed(2);
	
	// Display the total:
	document.getElementById('total').value = total;
	
	// Return false to prevent submission:
	return false;
    
} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;