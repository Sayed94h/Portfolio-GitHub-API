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

let textCont = "Web Developers make everything accessible from anywhere!      ";
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

let aaaa = setTimeout(run, 800);

/***
 * Show all github works contents by clicking the  "All Works" button
 *
 */

let showAll = false;
const allContainer = document.getElementById("github-works");
const showAllBtn = document.getElementById("show-all");
function showAllHandler() {
	showAll = !showAll;
	if (showAll) {
		if (screen.width < 784 && screen.width > 560) {
			allContainer.style =
				"display: grid;" +
				"grid-template-columns: auto auto auto;" +
				"justify-content: space-around;" +
				"text-align: center;";
		} else if (screen.width < 560) {
			allContainer.style =
				"display: grid;" +
				"grid-template-columns: auto;" +
				"justify-content: space-around;" +
				"text-align: center;";
		} else {
			allContainer.style =
				"display: grid;" +
				"grid-template-columns: auto auto auto;" +
				"justify-content: space-around;" +
				"text-align: center;";
		}
	} else {
		allContainer.style = "display: none;";
	}
}
showAllBtn.onclick = showAllHandler;
