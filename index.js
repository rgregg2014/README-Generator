// DEPENDENCIES====================================================================

//----------------------NPMs and External Files---------------------------------
const inquirer = require("inquirer");
const fs = require("fs");

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

let badge = "";
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      badge = `<img src="https://img.shields.io/badge/license-MIT-red">`;
      break;
    case "GNU General Public License":
      badge = `<img src="https://img.shields.io/badge/license-GNU-red">`;
      break;
    case "Mozilla Public License 2.0":
      badge = `<img src="https://img.shields.io/badge/license-Mozilla-red">`;
      break;
    case "Unlicense":
      badge = `<img src="https://img.shields.io/badge/license-Unlicense-red">`;
      break;
    case "Apache License 2.0":
      badge = `<img src="https://img.shields.io/badge/license-Apache-red">`;
      break;
    case "Boost Software License 1.0":
      badge = `<img src="https://img.shields.io/badge/license-Boost-red">`;
      break;
    default:
      break;
  }
  return badge;
}

let link = "";
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      link = `https://www.mit.edu/~amini/LICENSE.md`;
      break;
    case "GNU General Public License":
      link = `https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    case "Mozilla Public License 2.0":
      link = `https://www.mozilla.org/en-US/MPL/2.0/`;
      break;
    case "Unlicense":
      link = `https://unlicense.org/`;
      break;
    case "Apache License 2.0":
      link = `http://www.apache.org/licenses/LICENSE-2.0`;
      break;
    case "Boost Software License 1.0":
      link = `https://www.boost.org/LICENSE_1_0.txt`;
      break;
    default:
      break;
  }
  return link;
}

let writeHTML = (fileName, answers) => {
  //creates a new file with the answers from the prompts
  fs.writeFile(fileName, createHTML(answers), (err) => {
    if (err) throw err;
    return console.log("Your file has been created!");
  });
};

function createHTML({
  //user answers from prompts
  projectTitle,
  projectDesc,
  projectUserName,
  projectEmail,
  projectInstall,
  projectUsage,
  projectContribute,
  projectTest,
  projectLicense,
}) {
  //renders badge and link for license section
  renderLicenseBadge(projectLicense);
  renderLicenseLink(projectLicense);
  //template literal for markdown file
  return `# ${projectTitle}

## Description

${projectDesc}

## License

${badge}

This project is licensed under the ${projectLicense}.

For more information on this license, please visit [their website](${link})


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${projectInstall}

## Usage

${projectUsage}

## Contributing

${projectContribute}

## Testing

${projectTest}

## Questions

If you have any questions, please email me at ${projectEmail}.
Or, you can find me on [Github](https://www.github.com/${projectUserName}).`;
}

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
