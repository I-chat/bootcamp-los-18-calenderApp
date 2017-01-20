var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date(parseInt(localStorage.newYear), localStorage.newMonth); // create a date object
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var table = document.getElementById('day').getElementsByTagName('td');

document.getElementById("label").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`; // sets the current month name  and year in the calender
next.addEventListener("click", function(){document.getElementById("label").innerHTML = setMonths(date, true)}); // sets the next month name  and year in the calender
prev.addEventListener("click", function(){document.getElementById("label").innerHTML = setMonths(date, false)}); // sets the prev month name  and year in the calender
setDays(date);

// deducts or add month to the current year
function setMonths(currentDate, movement) {
	if (movement === false) {
		date = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1); // subtracts a month from the previous month
		for (var i = 0; i < table.length-1; ++i) {
			table[i].innerHTML = ""; // erases the table content when switching to the previous month
			table[i].style.cssText = null; // erases red background styling when switching to the previous month
		};
		setDays(date);
		return `${months[date.getMonth()]} ${date.getFullYear()}`; // returns the prev month and year in the calender
	} else {
		date = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 1); // adds a month to the current month
		for (var i = 0; i < table.length-1; ++i) {
			table[i].innerHTML = ""; // erases the table content when switching to the next month
			table[i].style.cssText = null; // erases red background styling when switching to the next month
		};
		setDays(date);
		return `${months[date.getMonth()]} ${date.getFullYear()}`; // returns the next month and year in the calender
	}
}

// returns the number of days in a month
function daysInMonth(month, year) {
	return new Date(year, month+1, 0).getDate();
}

// populates table with their respective figures
function setDays(currentDate) {
	var noOfDays = daysInMonth(currentDate.getMonth(), currentDate.getFullYear()); // calls the daysInMonth function with currentDate month and year
	var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // gets the first day of the month
	//populates the tables with their respective figures
	for (var i = firstDayOfMonth, k=0; k < noOfDays; i++, k++) {
		table[i].innerHTML = k + 1;
	}
}