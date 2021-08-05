//------------------Creates Badge Based on User Selected License----------------------
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
//------------------Renders Link Based on User Selected License-----------------------
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
//------------------Renders License Section Based on User Selection-------------------
function generateMarkdown({
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
//----------------------Generates Markdown for README---------------------------------

module.exports = generateMarkdown;
