// DEPENDENCIES====================================================================

//----------------------NPMs and External Files---------------------------------
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//---------------------User Prompts Array---------------------------------------
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
    message: "What are the installation instructions for your project?",
    name: "projectInstall",
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
      "MIT License",
      "GNU General Public License",
      "Mozilla Public License 2.0",
      "Unlicense",
      "Apache License 2.0",
      "Boost Software License 1.0",
    ],
    name: "projectLicense",
  },
];

const fileName = "autoREADME.md";
// FUNCTIONS=======================================================================

//-------------------------Creates Base File------------------------------------

let writeHTML = (fileName, answers) => {
  //creates a new file with the answers from the prompts
  fs.writeFile(fileName, generateMarkdown(answers), (err) => {
    if (err) throw err;
    return console.log("Your file has been created!");
  });
};

//------------------------Initializing Function---------------------------------
async function init() {
  inquirer
    //asks user a series of questions about the project
    .prompt(questions)
    //grabs the answers and feeds them, along with the file name into writeHTML
    .then((answers) => writeHTML(fileName, answers))
    //looks for any errors and alerts user
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
        console.log(error);
      }
    });
}

//-------------------------Initialization-----------------------------------------
init();
