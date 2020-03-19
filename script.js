const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

inquirer
    .prompt([
        {
            message: "What is your GitHub username?",
            name: "username"
            
        }
        
    ])