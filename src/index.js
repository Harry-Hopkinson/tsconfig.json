#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require("inquirer");
const path = require("path");
const { writeFile, readdir, readFile } = require("fs").promises;
const configFiles = {};
const configFolderPath = path.resolve(__dirname, "config");
var error = false;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield readdir(configFolderPath).catch(console.log);
    for (let i of files) {
        const fileType = i.split(".")[1];
        configFiles[fileType] = path.join(configFolderPath, i);
    }
    const technology = "json";
    var jsonConfig = yield readFile(configFiles[technology]).catch(console.log);
    const jsonFolderPath = path.join(process.cwd(), "tsconfig.json");
    yield writeFile(jsonFolderPath, jsonConfig.toString()).catch((err) => {
        console.log(err);
        error = true;
        process.exit();
    });
    if (error == false) {
        console.log("Tsconfig has been Created 🎉");
    }
    else {
        console.log("An error has occured 🥺");
    }
}))();
