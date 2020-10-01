const issueContainer = document.getElementById("issue-container");

let getDataIssue = function (data) {
	let jsonFile = data.json();

	return jsonFile;
};

let renderEachIssue = function (repo) {
	let arrItems = repo.items;

	for (let i = 0; i < arrItems.length; i++) {
		let aEl = document.createElement("a");
		aEl.href = `${arrItems[i].html_url}`;
		aEl.innerHTML = `${arrItems[i].title}<br/><br/>`;
		aEl.target = "_blank";

		issueContainer.appendChild(aEl);
	}
};

fetch("https://api.github.com/search/issues?q=author:Sayed94h")
	.then(getDataIssue)
	.then(renderEachIssue)
	.catch((msg) => {
		console.log("Error message: ", msg);
	});
