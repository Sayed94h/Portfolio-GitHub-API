export class displayImportandProjects {
	homepage = null;
	html_url = null;
	name = null;
	constructor(repositoriesData) {
		Object.assign(this, repositoriesData);
	}
	renderEachRepository() {
		let sectionEl = document.createElement("section");
		let h2ElOne = document.createElement("h2");
		let h2ElTwo = document.createElement("h2");
		let aElOne = document.createElement("a");
		let aElTwo = document.createElement("a");
		if (this.name === "acme-web-design") {
			sectionEl.className = `direct-project five`;
		}
		if (this.name === "app-theme") {
			sectionEl.className = `direct-project six`;
		}
		if (this.name === "duck-duck-clone") {
			sectionEl.className = `direct-project seven`;
		}
		if (this.name === "election_demo") {
			sectionEl.className = `direct-project eight`;
		}
		if (this.name === "Many-TodoList-Prototype") {
			sectionEl.className = `direct-project nine`;
		}
		if (this.name === "Development-strategy-semantic-layout") {
			sectionEl.className = `direct-project ten`;
		}
		if (this.name === "TodoList-Practical-JS") {
			sectionEl.className = `direct-project eleven`;
		}
		aElOne.innerHTML = "Source";
		aElOne.href = `${this.html_url}`;
		aElOne.target = "_blank";
		aElTwo.innerHTML = "Live";
		aElTwo.href = `${this.homepage}`;
		aElTwo.target = "_blank";
		h2ElOne.appendChild(aElOne);
		h2ElTwo.appendChild(aElTwo);
		sectionEl.appendChild(h2ElOne);
		sectionEl.appendChild(h2ElTwo);
		const importantProjects = document.getElementById("important-projects");
		importantProjects.appendChild(sectionEl);
		//return sectionEl;
	}
}
