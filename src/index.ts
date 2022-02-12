const inquirer = require("inquirer");
const path = require("path");
const { writeFile, readdir, readFile } = require("fs").promises;

const configFiles: any = {};
const configFolderPath = path.resolve(__dirname, "config");

async () => {
	const files = await readdir(configFolderPath).catch(console.log);

	for (let i of files) {
		const tsconfigName = i.split(".")[1];
		configFiles[tsconfigName] = path.join(configFolderPath, i);
	}
};
