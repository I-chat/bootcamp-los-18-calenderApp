var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var table = document.getElementById('day').getElementsByTagName('td');

document.getElementById("label").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`
next.addEventListener("click", function(){document.getElementById("label").innerHTML = setMonths(date, true)});
prev.addEventListener("click", function(){document.getElementById("label").innerHTML = setMonths(date, false)});
setDays(date);

function setMonths(currentDate, movement) {
	if (movement === false) {
		date = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1);
		for (var i = 0; i < table.length; ++i) {
			table[i].innerHTML = "";
			table[i].style.cssText = null;
		};
		setDays(date);
		return `${months[date.getMonth()]} ${date.getFullYear()}`;
	} else {
		date = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 1);
		for (var i = 0; i < table.length; ++i) {
			table[i].innerHTML = "";
			table[i].style.cssText = null;
		};
		setDays(date);
		return `${months[date.getMonth()]} ${date.getFullYear()}`
	}
}

function daysInMonth(month, year) {
	return new Date(year, month+1, 0).getDate();
}

function setDays(currentDate) {
	var noOfDays = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
	var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	for (var i = firstDayOfMonth, k=0; k < noOfDays; i++, k++) {
		if (k + 1 === date.getDate()){
			table[i].style.backgroundColor = 'rgb(255, 125, 115)';
			table[i].innerHTML = k + 1
		}
		table[i].innerHTML = k + 1;
	}
}