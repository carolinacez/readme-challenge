const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// array of questions for user
inquirer
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the projects name?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project name')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:', 
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                } else {
                    console.log('Pleasae enter a project description')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use:'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license:',
            choices: ['Apache', 'BSD', 'GNU', 'MIT', 'Mozilla']
        },
        {
            type: 'input',
            name: 'test', 
            message: 'Please provide ways on how you can test your application:'
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type:'input', 
            name:'email',
            message:'What is your email?'
        }
        
]);
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
    })
}

questions()
.then(readmeData => {
    const readmePage = generateMarkdown(readmeData);
    writeToFile('readme.md', readmePage);

})