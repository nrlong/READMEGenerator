const fs = require("fs");


const readmeGenerate = (response, followers, location, bioImage) => {
  return `# ${response.title}

![followers](https://img.shields.io/badge/Followers-${followers}-brightgreen)
![location](https://img.shields.io/badges/Location-${location}-blue)

## Description

${response.description}


## Table of Contents

* [Description](##Description)
* [Installation](##Installation)
* [Useage](##Useage)
* [License](##License)
* [Contributors](##Contributors)
* [Tests](##Tests)
* [Questions](##Questions)

##Installation

${response.install}

##Useage

${response.useage}

##License

${response.license}

##Contributors

${response.contributors}

##Tests

${response.testing}

##Questions

${response.questions}

## Email
${response.email};

![bioImage] (${bioImage})


`;
}

module.exports = readmeGenerate;
