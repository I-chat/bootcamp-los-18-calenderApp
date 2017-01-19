var date = new Date(1980, 0);
var btn = document.querySelectorAll("td");

for (var i = 0; i < btn.length; i++){
	btn[i].innerHTML = date.getFullYear() + i;
}
console.log(btn)