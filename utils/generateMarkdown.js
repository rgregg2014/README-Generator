//------------------Creates Badge Based on User Selected License----------------------
function renderLicenseBadge(license) {
  //If a license is selected, which badge is displayed?
  //If no license selected, return empty string
}

//------------------Renders Link Based on User Selected License-----------------------
function renderLicenseLink(license) {
  //If a license is selected, which link is appropriate?
  //If no license selected, return empty string
}

//------------------Renders License Section Based on User Selection-------------------
let license = function renderLicenseSection(license) {
  //If a license is selected, put prev 3 functions together to make the section
  //If no license selected, return an empty string
};

//----------------------Generates Markdown for README---------------------------------
function generateMarkdown(data) {
  //Generate title in a let based on questions.projectTitle w/ `# ${questions.projectTitle}

  //Generate Description Section. += to title let
  //SYNTAX:
  /*
      `## Description
      *What? Why? How?*
      ${questions.projectDesc}`
      */

  //Generate Licensing Section. += to title let
  // renderLicenseSection();

  //Generate Table of Contents based on user submissions. += to title let
  /*SYNTAX: `## Table of Contents
      conditional statements appending to ToC head w/ 
      - [Installation](#installation)
      - [Usage](#usage)
      - [Contributing](#contributing)
      - [Testing](#testing)
      - [Questions](#questions)
      */

  //Generate Installation. += to title let
  //conditional, return empty if no response

  //Generate Usage. += to title let
  //conditional, return empty if no response

  //Generate Contributing. += to title let
  //conditional, return empty if no response

  //Generate Testing. += to title let
  //conditional, return empty if no response

  //Generate Questions. += to title let
  //conditional, return empty if no response
  /*`If you have any questions, please email me at .
  Or, you can find me on [Github](https://www.github.com/'${questions.projectUserName}`).`*/

  return `# ${data.title}`;
}

module.exports = generateMarkdown;
