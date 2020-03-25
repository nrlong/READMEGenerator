const fs = require("fs");
const inquirer = require("inquirer");

const api = require("./utils/api.js");
const generateMarkdown = ("./utils/generateMarkdown.js");

console.log("We will be making a read me.  Please answer the following questions...")

const questions = [
    {
        type: "input",
        message: "What is your GitHub UserName?",
        name: "username"
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

];

async function writeToFile(fileName, data){
    await writeFileAsync(fileName, data, function(error){
        if(error){
            return console.log(error)
        }

        console.log("Success!!!");
    })
}

function init(){
    inquirer

    .prompt(questions)

    .then(async function gatherInformation(answers){
        try{

            // console.log(answers)
            const userData = await api.getUser(answers.username);
            // console.log(userData.data.data.user);
            const data = Object.assign({}, answers, userData.data.data.user);

            // console.log(data);
            const markStr = generateMarkdown.generateMarkdown(data);

            writeToFile("README.md", markStr);

        }catch(err){
            console.log(err);
        }
    });
        
}

init();