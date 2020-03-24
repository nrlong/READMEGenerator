const axios = require("axios");
const fs = require("fs");
const inquirer = require("inquirer");

console.log("We will be making a read me.  Please answer the following questions...")
const questions;

inquirer
    .prompt([{
        type: "input",
        message: "What is your GitHub UserName?",
        name: "name"
    },{
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },{
        type: "input",
        message: "Installation instructions?",
        name: "install"
    },{
        type: "input",
        message: "Any information about the projects usage?",
        name: "usage"
    },{
        type: "list",
        choices: ["None", "Apache License 2.0", "GNU General Pubic License v3.0", "MIT License", "Mozilla Public License 2.0"],
        message: "Would you like to add a license?  Please select and option.",
        name: "license"
    }, {
        type: "input",
        messages: "Would you like to list any contributors?",
        name: "contributors"
    }, {

    } , {
        type: "input",
        message: "Any testing information?",
        name: "testing"
    }, {
        type: "input",
        message: "Questions?",
        name: "questions"
    }

])