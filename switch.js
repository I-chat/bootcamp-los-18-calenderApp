var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var table = document.getElementById('day').getElementsByTagName('td');

document.getElementById("label").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`
next.addEventListener("click", function(){document.getElementById("label").innerHTML = setMonths(date, true)}, false);
prev.addEventListener("click", function(){document.getElementById("label").innerHTML = setMonths(date, false)}, false);
table.addEventListener("load", setDays(date));

function setMonths(currentDate, movement) {
	if (movement === false) {
		date = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1);
		for (var i = 0; i < table.length; ++i) {
			table[i].innerHTML = "";
		};
		setDays(date);
		return `${months[date.getMonth()]} ${date.getFullYear()}`;
	} else {
		date = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 1);
		for (var i = 0; i < table.length; ++i) {
			table[i].innerHTML = "";
		};
		setDays(date);
		return `${months[date.getMonth()]} ${date.getFullYear()}`
	}
}

function daysInMonth(month, year) {
	return new Date(year, month+1, 0).getDate();
}

function setDays(currentDate) {
	console.log(currentDate.getMonth());
	var noOfDays = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
	console.log(noOfDays);
	var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	console.log(firstDayOfMonth);
	for (var i = firstDayOfMonth, k=0; k < noOfDays; i++, k++) {
		table[i].innerHTML = k + 1;
	}
}