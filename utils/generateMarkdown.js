const readmeGenerate = (response, followers, location,  bioImage) => {
  return `# ${response.title}

## Description

${response.description}


## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Useage](#Useage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)
* [Email](#Email)

## Installation

    ${response.install}

## Useage

    ${response.useage}

## License

    ${response.license}

## Contributors

    ${response.contributors}

## Tests

    ${response.testing}

## Questions

    ${response.questions}

## Email

    ${response.email}

![bioImage](${bioImage}&s=200)


![followers](https://img.shields.io/badge/Followers-${followers}-brightgreen)
![location](https://img.shields.io/badge/Location-${location}-blue)
`;
}

module.exports = readmeGenerate;
