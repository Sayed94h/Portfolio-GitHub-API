/**
 * Footer ------> display content or does not
 */

let h3Contact = document.getElementById("contacts");
let h3FindMe = document.getElementById("find-me");
let divVia = document.getElementById("via");
let divWhere = document.getElementById("where");
let displ = false;
let displ111 = false;
function displayDivWhere() {
	divVia.style.display = "none";
	displ = !displ;
	if (displ) {
		divWhere.style.display = "contents";
	} else {
		divWhere.style.display = "none";
	}
}

function displayDivVia() {
	divWhere.style.display = "none";
	displ111 = !displ111;
	if (displ111) {
		divVia.style.display = "contents";
	} else {
		divVia.style.display = "none";
	}
}

h3Contact.onclick = displayDivVia;
h3FindMe.onclick = displayDivWhere;
