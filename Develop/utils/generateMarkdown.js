function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license) {
    return `License information can be found [here](https://choosealicense.com/licenses/${license.toLowerCase()}/).`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
If you have any questions, please feel free to contact me:

GitHub: https://github.com/${data.github}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;