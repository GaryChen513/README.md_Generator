
function generateMarkdown(data) {
  return `
<h1 align="center">${data.projectTitle}</h1>

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

## Description 
${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
This application is covered by the ${data.license} license.

## Contributing
[${data.contributing}](https://github.com/GaryChen513)

## Tests
${data.tests}

## Questions
Contact me with any question: [Github](https://github.com/${data.username}), 
[Email](mailto:garychen19970513@gmail.com)

`;
}

module.exports = generateMarkdown;
