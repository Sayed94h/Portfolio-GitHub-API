"use strict";
export class Repositories {
	html_url = null;
	name = null;

	constructor(repoData) {
		Object.assign(this, repoData);
	}
	renderRepos() {
		let aEl = document.createElement("a");
		aEl.href = `${this.html_url}`;
		aEl.innerHTML = `${this.name}<br/><br/>`;
		aEl.target = "_blank";

		return aEl;
	}
}
