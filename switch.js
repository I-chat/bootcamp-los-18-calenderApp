var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var JsCalender = function () {
	var switchMonth = function (currentDate, movement) {
		if (movement === false) {
			date = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1);
			return `${month[date.getMonth()]} ${date.getFullYear()}`;
		} else {
			date = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 1);
			return `${month[date.getMonth()]} ${date.getFullYear()}`
		}
		return `${month[date.getMonth()]} ${date.getFullYear()}`
	}
	document.getElementById('next').addEventListener("click", function(){
    	document.getElementById("label").innerHTML = switchMonth(date, true);
	})
	document.getElementById('prev').addEventListener("click", function(){
    	document.getElementById("label").innerHTML = switchMonth(date, false);
	})
}()
var setMonth = function() {
	document.getElementById("label").innerHTML = `${month[date.getMonth()]} ${date.getFullYear()}`
}()
var daysInMonth = function(month, year) {
	return new Date(year, month, 0).getDate();
}
var setDay = function() {
	document.getElementById
}