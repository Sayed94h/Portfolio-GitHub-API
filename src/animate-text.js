"use strict";
let getH2 = document.getElementById("fill-auto");

let color = {
	ele: {
		r: 177,
		g: 137,
		b: 1,
	},
	setEle: function () {
		this.ele.r = (this.ele.r + Math.random() * 255) % 255;
		this.ele.g = (this.ele.g + Math.random() * 255) % 255;
		//this.ele.b = (this.ele.b + Math.random() * 5) % 255;
	},
	setBack: function () {
		this.setEle();
		return (getH2.style.color = `rgb(${this.ele.r}, ${this.ele.g}, ${this.ele.b})`);
	},
};

let textCont = "Web Developers make everything accessible from anywhere! ";
let arrText = textCont.split("");

let i = 0;
function run() {
	setInterval(function () {
		color.setBack();
		getH2.innerHTML += arrText[i];

		i++;
		if (i > arrText.length - 1) {
			i = 0;
			getH2.textContent = "";
		}
	}, 300);
}

let aaaa = setTimeout(run, 1000);

/***
 * Show all
 *
 */

let showAll = false;
const allContainer = document.getElementById("github-works");
const showAllBtn = document.getElementById("show-all");
function showAllHandler() {
	showAll = !showAll;
	if (showAll) {
		allContainer.style =
			"display: grid;" +
			"grid-template-columns: auto auto auto;" +
			"justify-content: space-around;" +
			"text-align: center;";
	} else {
		allContainer.style = "display: none;";
	}
}
showAllBtn.onclick = showAllHandler;
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
	displ = !displ;
	if (displ) {
		divWhere.style.display = "contents";
	} else {
		divWhere.style.display = "none";
	}
}

function displayDivVia() {
	displ111 = !displ111;
	if (displ111) {
		divVia.style.display = "contents";
	} else {
		divVia.style.display = "none";
	}
}

h3Contact.onclick = displayDivVia;
h3FindMe.onclick = displayDivWhere;
