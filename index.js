const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios")
const generateMarkdown = require("./utils/generateMarkdown.js");

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
        message: "Please describe the project.",
        name: "description"
    },{
        type: "input",
        message: "Installation instructions?",
        name: "install"
    },{
        type: "input",
        message: "Any information about the projects usage?",
        name: "useage"
    },{
        type: "list",
        choices: [
            "None", 
            "Apache License 2.0", 
            "GNU General Pubic License v3.0", 
            "MIT License", 
            "Mozilla Public License 2.0"
    ],
        message: "Would you like to add a license?  Please select an option.",
        name: "license"
    }, {
        type: "input",
        message: "Would you like to list any contributors?",
        name: "contributors"
    }, {
        type: "input",
        message: "Any testing information?",
        name: "testing"
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }

];

function init(){
    inquirer

    .prompt(questions)

    .then(function(response){
        const url = `https://api.github.com/users/${response.username}`;
        let answers = response
    
        axios.get(url).then(function(data){
          let followers = data.data.followers;
          let location = data.location;
          let bioImg = data.data.avatar_url;
          let readmeFile = generateMarkdown(answers, followers, location, bioImg)
          fs.writeFile("README.md", readmeFile, function(error){
              if(error){
                  throw error;
              }else{
                  console.log("it worked!!")
              }
          })
    })
    })
}
init();