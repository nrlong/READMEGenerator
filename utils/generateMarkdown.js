function generateMarkdown(data) {
  return `
# ${data.title}

![Github ALl Releases](http://img.shields.io/github/downloads/${data.username}/${data.title}/total)

## Description

${data.description}


## Table of Contents

* [Description]{##Description}
* [Installation]{##Installation}
* [Useage]{##Useage}
* [License]{##License}
* [Contributors]{##Contributors}
* [Tests]{##Tests}
* [Questions]{##Questions}

##Installation

${data.install}

##Useage

${data.useage}

##License

![Github license](https://image.shields.io/badge/license-${data.license}-blue.svg)

##Contributors

${data.contributors}

##Tests

${data.testing}

##Questions

${data.questions}

![User's Avatar](${data.avatarURL})
${data.email}

`;
}

module.exports = generateMarkdown;
