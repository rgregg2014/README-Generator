//Gonna need to use the GitHub API to get URL for profile, which probably means a JSON?

// DEPENDENCIES=======================================================================

//-------------------------NPMs and External Files------------------------------------
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

//------------------------User Prompts Array------------------------------------------
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "projectTitle",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A project title is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your project about?",
    name: "projectDesc",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A project description is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your Github user name?",
    name: "projectUserName",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A Github user name is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "projectEmail",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("An email address is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "How do you use the application associated with your project?",
    name: "projectUsage",
  },
  {
    type: "input",
    message:
      "What are the guidelines for other developers to contribute to your project?",
    name: "projectContribute",
  },
  {
    type: "input",
    message: "How do you run any tests associated with your project?",
    name: "projectTest",
  },
  {
    type: "list",
    message: "Which license is your project available under?",
    choices: [
      "MIT",
      "GNU General Public License",
      "Mozilla Public License 2.0",
      "The Unilicense",
      "Apache License 2.0",
      "Boost Software License 1.0",
    ],
    name: "projectLicense",
  },
];

// FUNCTIONS==========================================================================

//----------------------------Creates Base File---------------------------------------
//this needs to be async, the name and type of file comes from the init() and data from generateMarkdown(), it'll break otherwise, also needs to be a promise, so gM() actually gets written to it.
async function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Check out your new README!");
  });
}

//---------------------------Initializing Function------------------------------------
async function init() {
  //Prompt questions, set into const userResponse = await inquirer.prompt(questions;)
  //console log responses, user can duck out and start over if they're wrong
  //
  //Call Github API for user data? set const userInfo = GH call??
  //
  //Pass questions and GH details to generateMarkdown, set const markdown = generateMarkdown(userResponse, userInfo)
  //console log markdown, user can start over if wrong
  //
  //await writeToFile('autoREADME.md, markdown)
  //
  //catch for errors, console log it
}

//---------------------------Initialization-------------------------------------------
init();
