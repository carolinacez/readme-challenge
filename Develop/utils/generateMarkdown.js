// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**

  ${gitHubLicense(data.license)}

  ## **Table of Contents** 
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributions](#Contributions)
  * [Test](#Test)
  * [Questions](#Questions)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contributions 
  
  ## Test 
  ${data.test}

  ## Questions 
  This is the github username ${data.github}. Please email ${data.email}

`;
}

let gitHubLicense = (license) => {
  return `![License](https://img.shields.io/badge/license-${license}-red.svg)`
}

module.exports = generateMarkdown;
