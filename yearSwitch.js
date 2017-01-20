var date = new Date(1980, 0); //creates a date object with a year and month value
var btn = document.querySelectorAll("td");

//populates table with their respective years
[...btn].forEach((x, i) => {
	x.innerHTML = `<a href="listmonth.html"> ${date.getFullYear() + i} </a>`;
});
var getAnchors = document.getElementsByTagName("a");
[...getAnchors].forEach(a => {
	a.addEventListener("click", function(evt) {
    localStorage.newYear = a.innerHTML;
  }, false);
})