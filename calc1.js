var totalAdd = 0,
	totalSubtract = 0;
totalDivide = 0,
	totalMultiply = 0;

$(document).ready(function () { //on DOM ready, bind clicks
	$("#compute").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		$(".numbah").each(function () {

			var.numbah = $(this),
				x_value = parseFloat($("#x").val()); //store the number of input 1
			y_value = parseFloat($("#y").val()); //store the number of input 2

		}); //end each

		// output the results
		show_results();
	});
});

//defining the functions outside of document.ready

function update_total_add(x_value, y_value) {
	//add the values
	var total_add_for_numbahs = x_value + y_value;
	totalAdd = totalAdd + total_add_for_numbahs;
}

function update_total_subtract(x_value, y_value) {
	//subtract the values
	var total_subtract_for_numbahs = x_value - y_value;
	totalSubtract = totalSubtract + total_subtract_for_numbahs;
}

function update_total_multiply(x_value, y_value) {
	//multiply the values
	var total_multiply_for_numbahs = x_value * y_value;
	totalMultiply = totalMultiply + total_multiply_for_numbahs;
}

function update_total_divide(x_value, y_value) {
	//divide the values
	var total_multiply_for_numbahs = x_value / y_value;
	totalDivide = totalDivide + total_divide_for_numbahs;
}


function show_results() {
	//totalCost and totalCalories are GLOBAL variables. This function can see them no problem!
	$("#add").val(totalAdd);
	$("#subtract").val(totalSubtract);
	$("#divde").val(totalDivide);
	$("#multiply").val(totalMultiply);
}
