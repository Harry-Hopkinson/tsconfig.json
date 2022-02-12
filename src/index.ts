#!/usr/bin/env node
const inquirer = require("inquirer");
const path = require("path");
const { writeFile, readdir, readFile } = require("fs").promises;

const configFiles: any = {};
const configFolderPath = path.resolve(__dirname, "config");
var error: Boolean = false;

(async () => {
	const files = await readdir(configFolderPath).catch(console.log);

	for (let i of files) {
		const fileType = i.split(".")[1];
		configFiles[fileType] = path.join(configFolderPath, i);
	}
	const technology = "json";
	var jsonConfig = await readFile(configFiles[technology]).catch(console.log);
	const jsonFolderPath = path.join(process.cwd(), "tsconfig.json");
	await writeFile(jsonFolderPath, jsonConfig.toString()).catch((err: any) => {
		console.log(err);
		error = true;
		process.exit();
	});
	if (error == false) {
		console.log("Tsconfig has been Created 🎉");
	} else {
		console.log("An error has occured 🥺");
	}
})();
