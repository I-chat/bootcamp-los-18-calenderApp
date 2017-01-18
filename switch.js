var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

document.getElementById("label").innerHTML = `${month[date.getMonth()]} ${date.getFullYear()}`
document.getElementById('next').addEventListener("click", function(){
    document.getElementById("label").innerHTML = setMonth(date, true);
})
document.getElementById('prev').addEventListener("click", function(){
    document.getElementById("label").innerHTML = setMonth(date, false);
})
var setMonth = function (currentDate, movement) {
	if (movement === false) {
		date = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1);
		return `${month[date.getMonth()]} ${date.getFullYear()}`;
	} else {
		date = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 1);
		return `${month[date.getMonth()]} ${date.getFullYear()}`
	}
}

var daysInMonth = function(month, year) {
	return new Date(year, month, 0).getDate();
}
var setDays = function(currentDate = date, movement) {
	var table = document.getElementById('day').getElementsByTagName('td');
	for (var i = firstDayOfMonth, cell; cell = table[i]; i++) {
		if (i < daysInMonth(date.getMonth(), date.getFullYear())) {
			cell.innerHTML = i + 1;
		}
	}
}()
