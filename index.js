
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile)

const promptUser = () =>{
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brieft description of your project: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation command on terminal: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What does this project use for? ",
    },
    {
      type: "list",
      name: "license",
      message: "Chose the license for this project: ",
      choices: [
        "GNU",
        "MIT",
        "OPEN",
        "Academic"
      ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributor of this project: ",   
    },
    {
      type: "input",
      name: "tests",
      message: "Is there a test included? "
    },
    {
      type: "input",
      name: "questions",
      message: "Write in any issues for this project: "
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your Github username: "
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: "
    }
  ])
}


const init = () =>{
  promptUser()
    .then((data) => writeFileAsync("./README.md", generateMarkdown(data)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();
