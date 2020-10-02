const linksContainer = document.getElementById("link-container");

let getData = function (data) {
	return data.json();
};

let renderEachRepo = function (repo) {
	console.log("repos are:", repo);
	for (let i = 0; i < repo.length; i++) {
		let aEl = document.createElement("a");
		aEl.href = `${repo[i].html_url}`;
		aEl.innerHTML = `${repo[i].name}<br/><br/>`;
		aEl.target = "_blank";

		linksContainer.appendChild(aEl);
	}
};

fetch("https://api.github.com/users/Sayed94h/repos")
	.then(getData)
	.then(renderEachRepo)
	.catch((msg) => {
		console.log("Error message: ", msg);
	});
