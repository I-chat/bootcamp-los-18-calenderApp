var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date(parseInt(localStorage.newYear), 0); // creates a date object with the value from the localStorage
document.querySelector("h3").innerHTML= localStorage.newYear;
var cell = document.querySelectorAll("td");

//populates the table with their respective month
[...cell].forEach((x, i) => {
	x.innerHTML = `<a href="month.html">${months[date.getMonth() + i]}</a>`;
});

var getAnchors = document.getElementsByTagName("a");
[...getAnchors].forEach(a => {
	a.addEventListener("click", function(evt) {
	localStorage.newMonth = months.indexOf(a.innerHTML);
  }, false);
})
console.log(localStorage.newMonth);