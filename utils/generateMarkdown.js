//------------------Creates Badge Based on User Selected License----------------------
//switch statements, dumbass
// let badge = "";
// function renderLicenseBadge(license) {
//   switch (license) {
//     case "MIT License":
//       badge = `[<img src="https://img.shields.io/badge/license-MIT-red">] (<LINK>)`;
//       break;
//     case "GNU General Public License":
//       badge = `[<img src="https://img.shields.io/badge/license-GNU-red">] (<LINK>)`;
//       break;
//     case "Mozilla Public License 2.0":
//       badge = `[<img src="https://img.shields.io/badge/license-Mozilla-red">] (<LINK>)`;
//       break;
//     case "Unlicense":
//       badge = `[<img src="https://img.shields.io/badge/license-Unlicense-red">] (<LINK>)`;
//       break;
//     case "Apache License 2.0":
//       badge = `[<img src="https://img.shields.io/badge/license-Apache-red">] (<LINK>)`;
//       break;
//     case "Boost Software License 1.0":
//       badge = `[<img src="https://img.shields.io/badge/license-Boost-red">] (<LINK>)`;
//       break;
//     default:
//       break;
//   }
//   return badge;
// }
//If a license is selected, which badge is displayed?
//img.shields.io/badge/license${(userInput)}-blue
//If no license selected, return empty string

//------------------Renders Link Based on User Selected License-----------------------
// let link = "";
// function renderLicenseLink(license) {
//   switch (license) {
//     case "MIT License":
//       link = `https://www.mit.edu/~amini/LICENSE.md`;
//       break;
//     case "GNU General Public License":
//       link = `https://www.gnu.org/licenses/gpl-3.0.en.html`;
//       break;
//     case "Mozilla Public License 2.0":
//       link = `https://www.mozilla.org/en-US/MPL/2.0/`;
//       break;
//     case "Unlicense":
//       link = `https://unlicense.org/`;
//       break;
//     case "Apache License 2.0":
//       link = `http://www.apache.org/licenses/LICENSE-2.0`;
//       break;
//     case "Boost Software License 1.0":
//       link = `https://www.boost.org/LICENSE_1_0.txt`;
//       break;
//     default:
//       break;
//   }
//   return link;
// }

//------------------Renders License Section Based on User Selection-------------------
// function renderLicenseSection(license) {
//   renderLicenseBadge(projectLicense);
//   renderLicenseLink(projectLicense);
//If a license is selected, put prev 3 functions together to make the section
//If no license selected, return an empty string
// }

//----------------------Generates Markdown for README---------------------------------
// function generateMarkdown({
//   projectTitle,
//   projectDesc,
//   projectUserName,
//   projectEmail,
//   projectInstall,
//   projectUsage,
//   projectContribute,
//   projectTest,
//   projectLicense,
// }) {
//   renderLicenseSection(projectLicense);
//   //template literal for markdown file
//   return `# ${projectTitle}
// ## Description

// ${projectDesc}

// ## License

// ${badge}
// This project is licensed under the ${projectLicense}.

// For more information on this license, please visit [their website](${link})

// ## Table of Contents

// - [Installation](#installation)
// - [Usage](#usage)
// - [Contributing](#contributing)
// - [Testing](#testing)
// - [Questions](#questions)

// ## Installation

// ${projectInstall}

// ## Usage

// ${projectUsage}

// ## Contributing

// ${projectContribute}

// ## Testing

// ${projectTest}

// ## Questions

// If you have any questions, please email me at ${projectEmail}.
// Or, you can find me on [Github](https://www.github.com/${projectUserName}).`;
// }

// module.exports = generateMarkdown;
