var date = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var next = document.getElementById('next');
var prev = document.getElementById('prev');

document.getElementById("label").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`
next.addEventListener("click", function(){document.getElementById("label").innerHTML = setWeek(date, true)});
prev.addEventListener("click", function(){document.getElementById("label").innerHTML = setWeek(date, false)});

function setWeek(currentDate, movement) {
	if (movement === false) {
		date = new Date(currentDate.getFullYear(), currentDate.getDay()-7, 1);
		for (var i = 0; i < table.length; ++i) {
			table[i].innerHTML = "";
			table[i].style.cssText = null;
		};
		setDays(date);
		return `${months[date.getMonth()]} ${date.getFullYear()}`;
	} else {
		date = new Date(currentDate.getFullYear(), currentDate.getDay()+1, 1);
		for (var i = 0; i < table.length; ++i) {
			table[i].innerHTML = "";
			table[i].style.cssText = null;
		};
		setDays(date);
		return `${months[date.getMonth()]} ${date.getFullYear()}`
	}
}