// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  }
  else if (license === 'Apache 2.0') {
    return '[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }
  else if (license === 'BSD 3-Clause') {
    return '[License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  }
  else if (license === 'MIT') {
    return '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  else if (license === 'Mozilla Public License 2.0') {
    return '[License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }
  else if (license === 'GNU GPL v3') {
    return '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return '';
  }
  else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }
  else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  }
  else if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  }
  else if (license === 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return '';
  }
  else if (license === 'Apache 2.0') {
    return 'Licensed by the Apache 2.0 License';
  }
  else if (license === 'BSD 3-Clause') {
    return 'Licensed by the BSD 3-Clause License';
  }
  else if (license === 'MIT') {
    return 'Licensed by the MIT License';
  }
  else if (license === 'Mozilla Public License 2.0') {
    return 'Licensed by the Mozilla Public License 2.0';
  }
  else if (license === 'GNU GPL v3') {
    return 'Licensed by the GNU General Public License v3.0';
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributions](#contributions)
   - [License](#license)
   - [Contact Me](#contact-me)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Contributions

  ${data.contributions}

  ## License

  ${renderLicenseBadge(data.license)} ${renderLicenseSection(data.license)}: ${renderLicenseLink(data.license)}

  ## Contact Me
  Have any Questions? Contact me at:

  [My GitHub](https://github.com/${data.githubUsername})

  or email me at ${data.email}

`;
}

module.exports = generateMarkdown;
