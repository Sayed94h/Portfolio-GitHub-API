const projectsContainer = document.getElementById("projects-container");

let getDataProjects = function (data) {
	return data.json();
};

let renderEachProjectsRepo = function (repo) {
	console.log("repos are:", repo);
	for (let i = 0; i < repo.length; i++) {
		if (repo[i].has_pages) {
			let aEl = document.createElement("a");
			aEl.href = `${repo[i].html_url}`;
			aEl.innerHTML = `${repo[i].name}<br/><br/>`;
			aEl.target = "_blank";

			projectsContainer.appendChild(aEl);
		}
	}
};

fetch("https://api.github.com/users/Sayed94h/repos")
	.then(getDataProjects)
	.then(renderEachProjectsRepo)
	.catch((msg) => {
		console.log("Error message: ", msg);
	});
