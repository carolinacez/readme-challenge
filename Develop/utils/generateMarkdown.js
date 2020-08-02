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
  Contributions are welcome. 
  Please submit a pull request or GitHub issue for any major changes. 
  
  ## Test 
  ${data.test}

  ## Questions 
 For any questions or issues, please email ${data.email} or visit github.com/${data.github}. 

`;
}

let gitHubLicense = (license) => {
  return `![License](https://img.shields.io/badge/license-${license}-red.svg)`
}

module.exports = generateMarkdown;
