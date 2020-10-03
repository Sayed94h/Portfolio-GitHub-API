"use strict";
import { Repositories } from "./repos.js";
const linksContainer = document.getElementById("link-container");
export const renderRepositories = function () {
	fetch("https://api.github.com/users/Sayed94h/repos")
		.then((responds) => {
			let res = responds.json();
			return res;
		})
		.then((repoData) => {
			for (let i = 0; i < repoData.length; i++) {
				const newRepo = new Repositories(repoData[i]);
				const renderNewRepos = newRepo.renderRepos();

				linksContainer.appendChild(renderNewRepos);
			}
		})
		.catch((msg) => {
			console.log("Error message: ", msg);
		});
};
